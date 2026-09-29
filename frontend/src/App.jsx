import React, { useState } from 'react';

const product = {
  name: 'Соларис 01',
  subtitle: 'Механика времени. Точность каждого мгновения.',
  description:
    'Автоматический механизм с запасом хода 42 часа, корпус из нержавеющей стали и сапфировое стекло. Созданы, чтобы оставаться с вами надолго.',
  price: 28900,
  image:
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=85',
};

const specs = [
  ['Механизм', 'Автоматический · 42 часа'],
  ['Корпус', 'Нержавеющая сталь · 40 мм'],
  ['Стекло', 'Сапфировое'],
];

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState(false);

  function addToCart() {
    setCartCount((count) => count + 1);
    setAdded(true);
  }

  return (
    <div className="storefront">
      <div className="announcement">Бесплатная доставка по России при заказе от 20 000 ₽</div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="FORMA — на главную">
          FORMA<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Основная навигация">
          <a href="#product">Коллекция</a>
          <a href="#details">О модели</a>
        </nav>
        <a className="bag-link" href="#product" aria-label={`Корзина, товаров: ${cartCount}`}>
          Корзина <span className="bag-count">{cartCount}</span>
        </a>
      </header>

      <main id="top" className="page-shell">
        <div className="breadcrumb" aria-label="Навигационная цепочка">
          <a href="#top">Главная</a>
          <span aria-hidden="true">/</span>
          <a href="#product">Часы</a>
          <span aria-hidden="true">/</span>
          <span className="current-crumb">{product.name}</span>
        </div>

        <article id="product" className="product-layout" aria-labelledby="product-title">
          <div className="product-visual">
            <span className="edition-label"><span className="edition-dot" />Новая коллекция · 2026</span>
            <img className="product-image" src={product.image} alt={`Наручные часы ${product.name}`} />
            <span className="image-index">01 <span>/</span> 01</span>
          </div>

          <section className="product-info">
            <p className="eyebrow">FORMA OBJECTS <span>—</span> F-01</p>
            <h1 id="product-title">{product.name}</h1>
            <p className="subtitle">{product.subtitle}</p>
            <div className="rating" aria-label="Оценка 4,9 из 5">
              <span className="stars" aria-hidden="true">★★★★★</span>
              <span>4,9</span>
              <span className="rating-divider" aria-hidden="true">·</span>
              <a href="#details">12 отзывов</a>
            </div>

            <div className="rule" />
            <p className="description">{product.description}</p>
            <dl id="details" className="spec-list">
              {specs.map(([label, value]) => (
                <div className="spec-row" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <div className="purchase-row">
              <p className="price">{product.price.toLocaleString('ru-RU')} <span>₽</span></p>
              <span className="availability"><span className="stock-dot" />В наличии</span>
            </div>
            <button className="buy-button" type="button" onClick={addToCart}>
              <span>{added ? 'Добавлено в корзину' : 'Купить'}</span>
              <span className="button-arrow" aria-hidden="true">↗</span>
            </button>
            <p className="delivery-note" aria-live="polite">
              {added ? `В корзине: ${cartCount} шт. · ` : ''}Доставка и возврат за наш счёт · Гарантия 2 года
            </p>
          </section>
        </article>

        <footer className="page-footer">
          <span>FORMA — предметы вне времени</span>
          <span>Дзангиев Магамед Вахаевич · Учебный проект</span>
        </footer>
      </main>
    </div>
  );
}
