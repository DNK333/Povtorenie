from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=120)
    subtitle = models.CharField(max_length=180)
    description = models.TextField()
    price = models.DecimalField(max_digits=9, decimal_places=2)
    image_url = models.URLField()
    is_featured = models.BooleanField(default=False)

    def __str__(self):
        return self.name
