from rest_framework import viewsets

from app.models import Todo
from app.serializers import TodoSerializer

# Create your views here.

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
