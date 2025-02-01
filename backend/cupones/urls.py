from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'cupones', views.CuponView, 'cupon')

urlpatterns = [
    path('api/', include(router.urls)),
    path('docs/', include_docs_urls(title='Cupones API')),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
]
