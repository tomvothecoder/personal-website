from rest_framework import serializers
from personal_website.blog.models import Category, Contact, Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"

