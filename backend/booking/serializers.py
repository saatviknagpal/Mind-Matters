from rest_framework import serializers
from .models import BookedSlot,Slot,Professional

class ProfessionalSerializer(serializers.ModelSerializer):
    class Meta:
        model=Professional
        fields="__all__"
        

class BookedSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=BookedSlot
        fields="__all__"
        
        

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=Slot
        fields="__all__"
                        