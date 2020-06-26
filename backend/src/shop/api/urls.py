from django.urls import path
from .views import MenuListView, MenuDetailView

urlpatterns = [
    path('', MenuListView.as_view()),
    path('<pk>', MenuDetailView.as_view())
]
