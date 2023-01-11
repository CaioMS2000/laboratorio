from django.db import models
from django.db.models import Model, DateTimeField, ForeignKey, CharField, ImageField, BooleanField, ManyToManyField
from django.contrib.auth.models import AbstractUser


class BaseModel(Model):
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class CustomUser(AbstractUser, BaseModel):
    friends = ManyToManyField(
        "self", through="Friendship", through_fields=('inviter', 'invited'))


class Friendship(BaseModel):
    inviter = ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name='inviter')
    invited = ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name='invited')
    deleted = BooleanField(default=False)


class Post(BaseModel):
    user = ForeignKey(CustomUser, on_delete=models.CASCADE)
    inner_text = CharField(max_length=500, blank=True, null=True)


class Image(BaseModel):
    image = ImageField()
    user = ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    post = ForeignKey(Post, on_delete=models.CASCADE, null=True)


class Message(BaseModel):
    sender = ForeignKey(CustomUser, on_delete=models.CASCADE,
                        related_name='sender')
    receiver = ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name='receiver')
    inner_text = CharField(max_length=500)
    read = BooleanField(default=False)
    deleted = BooleanField(default=False)


class Comment(BaseModel):
    user = ForeignKey(CustomUser, on_delete=models.CASCADE)
    post = ForeignKey(Post, on_delete=models.CASCADE)
    inner_text = CharField(max_length=500)


class Like(BaseModel):
    user = ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    post = ForeignKey(Post, on_delete=models.CASCADE, null=True)
    comment = ForeignKey(Comment, on_delete=models.CASCADE, null=True)
    message = ForeignKey(Message, on_delete=models.CASCADE, null=True)
