from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views import defaults as default_views
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token
from wagtail.admin import urls as wagtailadmin_urls
from wagtail.core import urls as wagtail_urls

from config.api_router_wagtail import api_router

urlpatterns = [
    path("", TemplateView.as_view(template_name="pages/home.html"), name="home"),
    # User management
    # Django Admin, use {% url 'admin:index' %}
    path(settings.ADMIN_URL, admin.site.urls),
    path("users/", include("personal_website.users.urls", namespace="users")),
    path("accounts/", include("allauth.urls")),
    # Wagtail
    # For anything not caught by a more specific rule above, hand over to
    # Wagtail's serving mechanism
    path("cms/", include(wagtailadmin_urls)),
    path("api/wagtail/v2/", api_router.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# API URLS
urlpatterns += [
    # API base url
    path("api/v1/", include("config.api_router")),
    # DRF auth token
    path("auth-token/", obtain_auth_token),
]
