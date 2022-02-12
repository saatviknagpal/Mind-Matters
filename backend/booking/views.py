from http import server
from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView
from .serializers import ProfessionalSerializer,SlotSerializer,BookedSlotSerializer
from .models import Professional,Slot,BookedSlot
from rest_framework.permissions import IsAuthenticated
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
    

class BookedSlotCreate(CreateAPIView):
    queryset=BookedSlot.objects.all()
    serializer_class=BookedSlotSerializer
    permission_classes=[IsAuthenticated]
class BookedSlotList(ListAPIView):
    serializer_class=BookedSlotSerializer
    
    def get_queryset(self):
        return BookedSlot.objects.filter(user=self.request.user.id)