from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics

from ..models import Category, Post
from .serializers import CategorySerializer, ContactSerializer, PostSerializer


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = Post


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryCreate(generics.CreateAPIView):
    serializer_class = CategorySerializer


class ContactCreate(generics.CreateAPIView):
    serializer_class = ContactSerializer
