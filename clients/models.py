from django.db import models

class Clients(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    edad = models.IntegerField()

    def __str__(self):
        return f"{self.name}"
