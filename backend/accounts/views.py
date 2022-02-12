from django.shortcuts import render
from .serializers import RegisterSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.
@api_view(['POST'])
def registration(request):
    serializer=RegisterSerializer(data=request.data)
    data={}
    if serializer.is_valid():
        user=serializer.save()
        data['response']="Registration successfull"
        data['username']=user.username
        data['email']=user.email
        refresh = RefreshToken.for_user(user)
        data['token']={
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        }
    else:
        data['error']=serializer.errors    
    return Response(data)    