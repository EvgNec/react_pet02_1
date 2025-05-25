import React from 'react';
import './cart.css'

export default function Cart({ products, onDel, onDecr, onIncr }) {
  return (
    <>
      <p>Title</p>
      <ul className="product-list">
        {products.map(product => (
          <li className="product-card" key={product.id}>
            <img
              src={product.image_url}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">
                {product.price.toFixed(2)} {product.currency}
              </p>
              <p className={`product-stock ${product.in_stock ? 'in' : 'out'}`}>
                {product.in_stock ? 'В наявності' : 'Немає в наявності'}
              </p>
            </div>
            <div className="quantity-wrapper">
              <button
                className="quantity-btn"
                onClick={() => onDecr(product.id)}
                disabled={product.quantity <= 1}
              >
                −
              </button>

              <div className="quantity-display">
                <span className="quantity-number">{product.quantity}</span>
                <span className="quantity-label">по 1 за раз</span>
              </div>

              <button
                className="quantity-btn"
                onClick={() => onIncr(product.id)}
              >
                +
              </button>
            </div>

            <button onClick={() => onDel(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
