from django.urls import path
from .views import (
    UserLoginView,
    UserRegistrationView,
    AccountEmailActivateView,
    UserRegistrationPaymentCreateView,
)


urlpatterns = [
    path('login/', UserLoginView.as_view(), name='login'),
    path('signup/', UserRegistrationView.as_view(), name='register'),
    path('email/confirmed/<key>/', AccountEmailActivateView.as_view(), name='email-activate'),
    path('registration/payment/', UserRegistrationPaymentCreateView.as_view(), name='registration-payment'),
]
