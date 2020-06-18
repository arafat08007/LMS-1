from django.urls import path

from .views import (
    HomeListView,
    PricingTemplateView
)


urlpatterns = [
    path('', HomeListView.as_view(), name='index'),
    path('pricing/', PricingTemplateView.as_view(), name='pricing-view'),
]
