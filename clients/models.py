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

    def __str__(self):
        return f"{self.name}"

class Direction(models.Model):
    client = models.ForeignKey("Clients", on_delete=models.CASCADE, related_name="directions")
    street = models.CharField(max_length=200)
    avenue = models.CharField(max_length=200)
    area = models.CharField(max_length=200)
    references = models.TextField()

    def __str__(self):
        return f"{self.client.name}, {self.street}, {self.avenue}, {self.area}"

class Order(models.Model):
    client = models.ForeignKey("Clients", on_delete=models.CASCADE, related_name="orders")
    date = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.id} - {self.client.name}"

class TypePaymentMethod(models.Model):
    name = models.CharField(max_length=50)

class PaymentMethod(models.Model):
    client = models.ForeignKey("Clients", on_delete=models.CASCADE, related_name="paymentMethods")
    type = models.ForeignKey("TypePaymentMethod", on_delete=models.CASCADE, related_name="typePaymentMethods")

    def __str__(self):
        return f"{self.type.name} ({self.client.name})"
