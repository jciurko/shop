from rest_framework.generics import ListAPIView, RetrieveAPIView
from shop.models import Menu
from .serializers import MenuSerializer


class MenuListView(ListAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class MenuDetailView(RetrieveAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
