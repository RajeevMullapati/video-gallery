from django.urls import path
from .views import *

urlpatterns = [
    path('video/', home, name='home'),
]

