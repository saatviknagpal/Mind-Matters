import email
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import User
# Create your models here.
class Professional(models.Model):
    name=models.CharField(max_length=60)
    degree=models.CharField(max_length=60)
    image_url=models.URLField(max_length=200,null=True)
    contact=PhoneNumberField(blank=True)
    email=models.EmailField(max_length=60)
    session_fees=models.IntegerField(default=200)
    
    def __str__(self):
        return self.name

class Slot(models.Model):
    start_time=models.TimeField()
    end_time=models.TimeField()
    
    def __str__(self):
        return str(self.start_time)+"-"+str(self.end_time)

class BookedSlot(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    professional=models.ForeignKey(Professional,on_delete=models.CASCADE)
    slot=models.ForeignKey(Slot,on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.name
    