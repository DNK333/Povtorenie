from decimal import Decimal

from django.db import migrations, models


def add_featured_product(apps, schema_editor):
    Product = apps.get_model('catalog', 'Product')
    Product.objects.get_or_create(
        is_featured=True,
        defaults={
            'name': 'Соларис 01',
            'subtitle': 'Механика времени. Точность каждого мгновения.',
            'description': (
                'Автоматический механизм с запасом хода 42 часа, корпус из\n'
                'нержавеющей стали и сапфировое стекло. Созданы, чтобы\n'
                'оставаться с вами надолго.'
            ),
            'price': Decimal('28900.00'),
            'image_url': (
                'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
                '?auto=format&fit=crop&w=1400&q=85'
            ),
        },
    )


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('subtitle', models.CharField(max_length=180)),
                ('description', models.TextField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=9)),
                ('image_url', models.URLField()),
                ('is_featured', models.BooleanField(default=False)),
            ],
        ),
        migrations.RunPython(add_featured_product, migrations.RunPython.noop),
    ]
