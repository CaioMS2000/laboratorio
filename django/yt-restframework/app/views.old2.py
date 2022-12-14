from rest_framework import generics

from app.models import Todo
from app.serializers import TodoSerializer

# Create your views here.

class TodoListAndCreate(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TodoDeatilChangeAndDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer