from django.contrib import admin
from .models import BookedSlot, Professional, Slot
# Register your models here.

admin.site.register(Professional)
admin.site.register(Slot)
admin.site.register(BookedSlot)
