from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import ListView, DetailView
from django.utils import timezone
from django.contrib import messages

from .models import Item, OrderItem, Order

class HomeView(ListView):
    model = Item
    template_name = 'home.html'
    paginate_by = 10


class ItemDetailView(DetailView):
    model = Item
    template_name = 'product.html'


def products(request):
    context = {
        'items': Item.objects.all()
    }

    return render(request, 'products.html', context)

def checkout(request):

    return render(request, 'checkout.html')

def add_to_cart(request, slug):
    item = get_object_or_404(Item, slug= slug)
    order_item = OrderItem.objects.get_or_create(item= item, user= request.user, ordered= False)
    order_qs = Order.objects.filter(user= request.user, ordered= False)

    if order_qs.exists():
        order = order_qs[0]

        if order.items.filter(item__slug= item.slug).exists():
            order_item.quantity += 1
            order_item.save()
            messages.info(request, "Item quantity was updated")
        else:
            order.items.add(order_item)
            messages.info(request, "This item was added to cart")
            return redirect("core:product", slug= slug)
    else:
        ordered_date = timezone.now()
        order = Order.objects.create(user= request.user, ordered_date= ordered_date)
        order.items.add(order_item)
        messages.info(request, "This item was added to cart")
    
    return redirect("core:product", slug= slug)

def remove_from_cart(request, slug):
    item = get_object_or_404(Item, slug= slug)
    order_qs = Order.objects.filter(user= request.user, ordered= False)

    if order_qs.exists():
        order = order_qs[0]

        if order.items.filter(item__slug= item.slug).exists():
            order_item = OrderItem.objects.filter(item= item, user= request.user, ordered= False)[0]
            order.items.remove(order_item)
            messages.info(request, "Item was removed")
            return redirect("core:product", slug= slug)
        else:
            messages.info(request, "Item was not in cart")
            return redirect("core:product", slug= slug)
    else:
        messages.info(request, "You don't have an order")
        return redirect("core:product", slug= slug)