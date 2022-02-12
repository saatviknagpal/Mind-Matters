from rest_framework import serializers
from .models import BookedSlot,Slot,Professional

class ProfessionalSerializer(serializers.ModelSerializer):
    class Meta:
        model=Professional
        fields="__all__"
        

class BookedSlotSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=BookedSlot
        fields=['professional','slot']
        
    def create(self, validated_data):
        user=self.context['request'].user
        professional=self.validated_data['professional']
        slot=self.validated_data['slot']
        booked_slot=BookedSlot(user=user,professional=professional,slot=slot)
        booked_slot.save()
        return booked_slot 
         
class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=Slot
        fields="__all__"
                        