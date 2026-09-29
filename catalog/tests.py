from django.test import TestCase
from django.urls import reverse

from .models import Product


class ProductPageTests(TestCase):
    def test_homepage_displays_the_single_featured_product(self):
        response = self.client.get(reverse('catalog:product'))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Product.objects.count(), 1)
        self.assertContains(response, 'Соларис 01')

    def test_add_to_cart_increments_the_session_count(self):
        response = self.client.post(reverse('catalog:add_to_cart'))

        self.assertRedirects(response, reverse('catalog:product'))
        self.assertEqual(self.client.session['cart_count'], 1)
