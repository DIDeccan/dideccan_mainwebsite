from django.urls import path
from .views import contact, register

urlpatterns = [
    path("register", register, name="register"),
    path("contact", contact, name="contact"),
]
