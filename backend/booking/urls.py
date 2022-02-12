from django.urls import path
from .views import ProfessionalList,ProfessionalDetail,SlotList

urlpatterns=[
    path("professionals/",ProfessionalList.as_view(),name='professional-list'),
    path("professionals/<int:pk>",ProfessionalDetail.as_view(),name='professional-detail'),
    path("slots/",SlotList.as_view(),name='slot-list'),
]