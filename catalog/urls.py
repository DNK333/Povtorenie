from django.urls import path

from . import views

app_name = 'catalog'

urlpatterns = [
    path('', views.product_detail, name='product'),
    path('bag/add/', views.add_to_cart, name='add_to_cart'),
]
