import React from "react";
import css from '../Catalog/Catalog.module.css';

export default function  CatalogList ({product, onAdd}) {
    return (
        <>
           <li className="productCard" key={product.id}>
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
            <p className={`css.productStock ${product.in_stock ? 'in' : 'out'}`}>
              {product.in_stock ? 'В наявності' : 'Немає в наявності'}
            </p>
          </div>
          <button onClick={() => onAdd(product.id)}>Add</button>
            </li>        
        </>
    )
}