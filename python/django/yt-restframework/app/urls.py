from django.urls import path
from rest_framework.routers import DefaultRouter

from app.views import TodoViewSet

router = DefaultRouter()
router.register(r'', TodoViewSet)
urlpatterns = router.urls