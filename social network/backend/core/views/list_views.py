from rest_framework.generics import ListAPIView

from core.models import CustomUser, Friendship, Post, Image, Message, Comment, Like
from core.serializers import CustomUserSerializer, FriendshipSerializer, PostSerializer, ImageSerializer, MessageSerializer, CommentSerializer, LikeSerializer

class CustomUserListView(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class FriendshipListView(ListAPIView):
    queryset = Friendship.objects.all()
    serializer_class = FriendshipSerializer


class PostListView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class ImageListView(ListAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class MessageListView(ListAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class CommentListView(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class LikeListView(ListAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer