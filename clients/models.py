from django.db import models

class Clients(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    age = models.IntegerField()
    country = models.ForeignKey("Country", on_delete=models.SET_NULL, null=True, related_name="clients")

    def __str__(self):
        return f"{self.name}"
    
class Country(models.Model):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=10)