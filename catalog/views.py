from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.http import require_POST

from .models import Product


def product_detail(request):
    product = get_object_or_404(Product, is_featured=True)
    return render(
        request,
        'catalog/product_detail.html',
        {
            'product': product,
            'cart_count': request.session.get('cart_count', 0),
        },
    )


@require_POST
def add_to_cart(request):
    request.session['cart_count'] = request.session.get('cart_count', 0) + 1
    return redirect('catalog:product')
