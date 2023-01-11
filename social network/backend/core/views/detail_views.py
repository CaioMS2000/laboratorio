from rest_framework.generics import RetrieveAPIView

from core.models import CustomUser, Friendship, Post, Image, Message, Comment, Like
from core.serializers import CustomUserSerializer, FriendshipSerializer, PostSerializer, ImageSerializer, MessageSerializer, CommentSerializer, LikeSerializer

class CustomUserDetailtView(RetrieveAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class FriendshipDetailtView(RetrieveAPIView):
    queryset = Friendship.objects.all()
    serializer_class = FriendshipSerializer


class PostDetailtView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class ImageDetailtView(RetrieveAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class MessageDetailtView(RetrieveAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class CommentDetailtView(RetrieveAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class LikeDetailtView(RetrieveAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer