from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=70)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    owner = models.ForeignKey(User, on_delete=models.CASCADE, blank = True, null=True, related_name='post')


    #작성자인 owner라는 필드를 추가해보자.
    #django의 기본 User모델을 사용하였고, Foreignkey로 다대일 관계를 맺어주었다.
    #related_name을 통해 이후 역참조 시 Post를 찾을 수 있도록(나는 이걸 post로 해야 할까, freeboard로 해야 할까)

    def __str__(self):
        return self.title

class Comment(models.Model):
    title = models.CharField(max_length=70)
    body = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title