from rest_framework import serializers
from django.contrib.auth.models import User

class RegisterSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={'input_type':'password'},write_only=True)
    class Meta:
        model=User
        fields=['username','email','password','password2']
        extra_kwargs={
            'password':{'write_only':True}
        }
        
    def save(self, **kwargs):
        username=self.validated_data['username']
        email=self.validated_data['email']    
        password=self.validated_data['password']    
        password2=self.validated_data['password2']    
        
        if password!=password2:
            raise serializers.ValidationError("Passwords do not match")
        
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("email already exist")
        
        account=User(username=username,email=email)
        account.set_password(password)
        account.save()
        
        return account
        