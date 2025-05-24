import React from 'react';
import Catalog from './Catalog';
import product from './products.json'

export default class Shop extends React.Component {
  state = {
    products: product,    
    cart: [],
    isCartOpen: false,
  };
  render() {
    const { products, product } = this.state;
    return (
      <>
        Test Shops
        <Catalog products={products} />
      </>
    );
  }
}
