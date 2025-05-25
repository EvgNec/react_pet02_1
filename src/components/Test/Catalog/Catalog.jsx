import React from "react";
import CatalogList from "../CatalogList";
// import './catalog.css';
import css from './Catalog.module.css';


export default function Catalog({products, AddProduct}) {
    return (
        <>
          <p>Title</p>         
          <ul className={css.productList}>
          {products.map(
            product => (
                <CatalogList
                   key={product.id}
                   product={product} 
                   onAdd={AddProduct}
                />
            )
            )}
         </ul>
        </>
    );
}
