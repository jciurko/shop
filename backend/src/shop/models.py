from django.db import models


class Menu(models.Model):
    meal_name = models.CharField(max_length=120)
    description = models.CharField(max_length=150)
    price_tag = models.DecimalField(
        default=0.00, max_digits=5, decimal_places=2)

    def __str__(self):
        return self.meal_name
