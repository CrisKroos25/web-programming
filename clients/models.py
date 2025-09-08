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

class Direction(models.Model):
    client = models.ForeignKey("Clients", on_delete=models.CASCADE, related_name="directions")
    street = models.CharField(max_length=200)
    avenue = models.CharField(max_length=200)
    area = models.CharField(max_length=200)
    references = models.TextField()
    