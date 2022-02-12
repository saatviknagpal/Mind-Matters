from django.db import models

# Create your models here.
class Blog(models.Model):
    title=models.CharField(max_length=60)
    description=models.TextField()
    author=models.CharField(max_length=60)
    created_on=models.DateField(auto_now_add=True)
    image_url=models.URLField(max_length=300)
    
    def __str__(self):
        return self.title