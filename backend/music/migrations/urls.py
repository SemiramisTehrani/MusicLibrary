# created by us

from django.urls import path
from . import views

urlpatterns = [
    path('/music/', views.music_list),
    # path('', views.cars_list),
    #path('<int:pk>/' , views.music_list),
]
