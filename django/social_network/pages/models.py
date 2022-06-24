from django.db.models import *
from users.models import User

# Create your models here.
class Conversation(Model):
    first_id = ForeignKey(User, related_name='conv_first_id', on_delete=CASCADE)
    second_id = ForeignKey(User, related_name='conv_second_id', on_delete=CASCADE)
    total_messages = IntegerField(default=0)
    slug = SlugField(default=f'{first_id}_{second_id}', unique=True)


class Friendship(Model):
    first_id = ForeignKey(User, related_name='frnd_first_id', on_delete=CASCADE)
    second_id = ForeignKey(User, related_name='frnd_second_id', on_delete=CASCADE)
    created_at = DateTimeField(auto_now_add=True)


class Message(Model):
    conversation = ForeignKey(Conversation, on_delete=CASCADE)
    created_at = DateTimeField(auto_now_add=True)
    read = BooleanField(default=False)
    text = TextField()


class Post(Model):
    user_id = ForeignKey(User, on_delete=CASCADE)
    created_at = DateTimeField(auto_now_add=True)
    text = TextField()
    image = URLField()


class Comment(Model):
    image = URLField()
    text = TextField()
    created_at = DateTimeField(auto_now_add=True)
    user_id = ForeignKey(User, on_delete=CASCADE)
    post_id = ForeignKey(Post, on_delete=CASCADE)


class Like(Model):
    created_at = DateTimeField(auto_now_add=True)
    user_id = ForeignKey(User, on_delete=CASCADE)
    post_id = ForeignKey(Post, on_delete=CASCADE)