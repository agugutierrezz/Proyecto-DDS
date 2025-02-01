from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cupones/', include('cupones.urls')),
    path('', include('cupones.urls'))
]
