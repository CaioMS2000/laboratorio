from django.db import models
from django.db.models import Model, DateTimeField, ForeignKey, CharField, ImageField, BooleanField, AutoField
from django.conf import settings

User = settings.AUTH_USER_MODEL

class _Model():
    created_at = DateTimeField(auto_now_add= True)
    updated_at = DateTimeField(auto_now_add= True)


class CustomUser(User, _Model):
    pass


class Post(Model, _Model):
    user = ForeignKey(CustomUser, on_delete=models.CASCADE)
    inner_text = CharField(max_length= 500)


class Image(Model, _Model):
    image = ImageField()
    user = ForeignKey(CustomUser, on_delete=models.CASCADE, null= True)
    post = ForeignKey(Post, on_delete=models.CASCADE, null= True)


class Message(Model, _Model):
    sender = ForeignKey(CustomUser, on_delete=models.CASCADE, related_name= 'sender')
    receiver = ForeignKey(CustomUser, on_delete=models.CASCADE, related_name= 'receiver')
    inner_text = CharField(max_length= 500)
    read = BooleanField(default= None)
    deleted = BooleanField(default= None)


class Comment(Model, _Model):
    user = ForeignKey(CustomUser, on_delete=models.CASCADE)
    post = ForeignKey(Post, on_delete=models.CASCADE)
    inner_text = CharField(max_length= 500)


class Like(Model, _Model):
    user = ForeignKey(CustomUser, on_delete=models.CASCADE, null= True)
    post = ForeignKey(Post, on_delete=models.CASCADE, null= True)
    comment = ForeignKey(Comment, on_delete=models.CASCADE, null= True)
    message = ForeignKey(Message, on_delete=models.CASCADE, null= True)

