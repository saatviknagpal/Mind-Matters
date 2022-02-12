from rest_framework.generics import ListAPIView
from .models import Blog
from .serilaizers import BlogSerializer
# Create your views here.

class BlogList(ListAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogSerializer

