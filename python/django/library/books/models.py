from distutils.command.upload import upload
from django.db import models
from uuid import uuid4


def upload_image_book(instance, filename):
    return f'{instance,id}-{filename}'

# Create your models here.

class Books(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    release_year = models.IntegerField()
    publishing_company = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)
    state = models.CharField(max_length=50)
    pages = models.IntegerField()
    image = models.ImageField(upload_to=upload_image_book, blank=True, null=True)