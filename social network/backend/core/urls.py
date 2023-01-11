from django.urls import path

from .views import list_views, detail_views

urlpatterns = [
    path('', list_views.CustomUserListView.as_view()),
    path('', list_views.FriendshipListView.as_view()),
    path('', list_views.PostListView.as_view()),
    path('', list_views.ImageListView.as_view()),
    path('', list_views.MessageListView.as_view()),
    path('', list_views.CommentListView.as_view()),
    path('', list_views.LikeListView.as_view()),

    path('', detail_views.CustomUserDetailtView.as_view()),
    path('', detail_views.FriendshipDetailtView.as_view()),
    path('', detail_views.PostDetailtView.as_view()),
    path('', detail_views.ImageDetailtView.as_view()),
    path('', detail_views.MessageDetailtView.as_view()),
    path('', detail_views.CommentDetailtView.as_view()),
    path('', detail_views.LikeDetailtView.as_view()),
]
