from django.urls import path
from . import views
from .views import home, store, exit
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.home),
    path('index', views.index),
    path('carrito', views.carrito),
    path('store', views.store),
    path('recicle', views.recicle),
    path('login', views.login),
    path('login2', views.login2),
    path('exit',exit, name='exit'),
    path('', home, name='home'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)