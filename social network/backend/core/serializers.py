from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from .models import CustomUser, Friendship, Post, Image, Message, Comment, Like

class CustomUserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ()


class FriendshipSerializer(ModelSerializer):
    class Meta:
        model = Friendship
        fields = ()


class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ()


class ImageSerializer(ModelSerializer):
    class Meta:
        model = Image
        fields = ()


class MessageSerializer(ModelSerializer):
    class Meta:
        model = Message
        fields = ()


class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ()


class LikeSerializer(ModelSerializer):
    class Meta:
        model = Like
        fields = ()

