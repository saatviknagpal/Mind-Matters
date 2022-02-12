from rest_framework.generics import ListAPIView,RetrieveAPIView
from .serializers import ProfessionalSerializer,SlotSerializer
from .models import Professional,Slot
# Create your views here.


class ProfessionalList(ListAPIView):
    queryset=Professional.objects.all()
    serializer_class=ProfessionalSerializer
    
class ProfessionalDetail(RetrieveAPIView):
    queryset=Professional.objects.all()
    serializer_class=ProfessionalSerializer


class SlotList(ListAPIView):
    queryset=Slot.objects.all()
    serializer_class=SlotSerializer