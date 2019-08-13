from django.urls import path

from .api.views import (
    CategoryCreate, PostDetail, PostList)

app_name = "blog"
urlpatterns = [
    path('posts/', PostList.as_view(), name='polls_list'),
    path('posts/<int:pk>', PostDetail.as_view(), name='posts_detail'),
    path('category/', CategoryCreate.as_view(), name='create_vote'),
    path('contact/', CategoryCreate.as_view(), name='create_vote'),
]
