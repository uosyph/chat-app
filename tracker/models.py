from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass
    id = models.AutoField(primary_key=True)
    following = models.ManyToManyField(
        "self", blank=True, related_name='followers', symmetrical=False)


class Report(models.Model):
    id = models.AutoField(primary_key=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="posts")
    content = models.CharField(max_length=5000)
    created_at = models.DateTimeField(auto_now_add=True)
    liked_by = models.ManyToManyField(User, blank=True, related_name="votes")

    def __str__(self):
        return f'"{self.author}" REPORTED "{self.content}"'

    def votes(self):
        return self.liked_by.all().count()

    class Meta:
        ordering = ['-created_at']
