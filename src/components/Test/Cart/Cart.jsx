import React from 'react';
// import './cart.css'
import css from './Cart.module.css';


export default function Cart({ products, onDel, onDecr, onIncr }) {
  return (
    <>
      <p>Title</p>
      <ul className={css.productList}>
        {products.map(product => (
          <li className={css.productCard} key={product.id}>
            <img
              src={product.image_url}
              alt={product.name}
              className={css.productImage}
            />
            <div className={css.productInfo}>
              <h2 className={css.productName}>{product.name}</h2>
              <p className={css.productPrice}>
                {product.price.toFixed(2)} {product.currency}
              </p>
              <p className={`productStock ${product.in_stock ? 'in' : 'out'}`}>
                {product.in_stock ? 'В наявності' : 'Немає в наявності'}
              </p>
            </div>
            <div className={css.quantityWrapper}>
              <button
                className={css.quantityBtn}
                onClick={() => onDecr(product.id)}
                disabled={product.quantity <= 1}
              >
                −
              </button>

              <div className={css.quantityDisplay}>
                <span className={css.quantityNumber}>{product.quantity}</span>
                <span className={css.quantityLabel}>по 1 за раз</span>
              </div>

              <button
                className={css.quantityBtn}
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
