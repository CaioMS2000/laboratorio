from django.shortcuts import render

import random

# Create your views here.
def home(request):
    return render(request, 'pages/home.html', {
        'bckgr_img_url': f'images/backgrounds/{random.randint(1, 7)}.jpg',
        'icon_img_url':f'images/icons/{random.randint(1, 4)}.png'
        })