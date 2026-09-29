# Повторение

**Дзангиев Магамед Вахаевич**

## Домашнее задание: подключение CSS к React

React-приложение с карточкой часов: изображение, название, описание, цена и кнопка «Купить». Стили подключены отдельным CSS-файлом через `import`, компоненты используют `className`. Кнопка добавляет товар в корзину и обновляет счётчик.

### Запуск React-приложения

```powershell
cd frontend
npm install
npm run dev
```

Откройте адрес, который покажет Vite (обычно http://localhost:5173/).

## Django-магазин FORMA

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
