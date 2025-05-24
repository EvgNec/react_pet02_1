import React from "react";
import CatalogList from "../CatalogList";
import './catalog.css';


export default function Catalog({products, handleAddToCart}) {
    return (
        <>
          <p>Title</p>         
          <ul className="product-list">
          {products.map(
            product => (
                <CatalogList
                   key={product.id}
                   product={product} 
                />
            )
            )}
         </ul>
        </>
    );
}
