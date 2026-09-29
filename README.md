# FORMA — мини-магазин Django

Одностраничный магазин с одной карточкой часов, стартовым товаром в миграции и работающей кнопкой добавления в корзину. Django 5.2, SQLite и адаптивная вёрстка.

## Запуск в Windows PowerShell

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Откройте http://127.0.0.1:8000/.

## Проверки

```powershell
python manage.py test
python manage.py check
```

Для production задайте переменную окружения `DJANGO_SECRET_KEY`, отключите `DEBUG` и настройте `ALLOWED_HOSTS`.
