import React from 'react';
import Catalog from './Catalog';
import product from './products.json';
import Cart from './Cart';

export default class Shop extends React.Component {
  state = {
    products: product,
    cart: [],
    isCartOpen: false,
  };

  AddProduct = (id) => {
    // перевіряємо чи є цей пролукт у корзині
    const isProductInCart = this.state.cart.find(
      (product) => product.id === id
    );
    console.log("🚀 ~ Shop ~ isProductInCart:", isProductInCart)
    if (!isProductInCart) {
      // якщо продукта немає у корзині, то ми його додаємо та додаємо також нову властивість quantity яка сигналізує нам що цей продукт ми додали в корзину вперше

      // шукаємо продукт у базі, який має той ж id який нам прийшов параметром
      const product = this.state.products.find((product) => product.id === id);

      // оновлюємо стан, розпилюємо попередні значення + додаємо новий продукт з властивістю quantity, яка сигналізує нам що цей продукт ми додали в корзину вперше
      this.setState((prevState) => ({
        cart: [...prevState.cart, { ...product, quantity: 1 }],
      }));
    } else {
      // якщо продукт уже є у корзині, то ми його збільшуємо його поточну кількість на 1

      //  оновлюємо кількість того продукта, на який повторно нажали і перезаписуємо стейт
      const updatedCart = this.state.cart.map((item) => {
        if (isProductInCart.id === item.id) {
          return { ...item, quantity: (item.quantity += 1) };
        }
        return item;
      });

      this.setState({ cart: updatedCart });
    }
  };

  onDel = (id) => {
    this.setState((prev) =>
    ({
      cart: prev.cart.filter((product) => product.id !== id )
    })
    )
  }

  onDecr = (id) => {
    const targetProduct = this.state.cart.find(p => p.id === id);

    if (targetProduct && targetProduct.quantity === 1) {
      this.onDel(id); 
      return;
    }
    const updatedCart = this.state.cart.map((product) => {
      if (id === product.id) {
        return { ...product, quantity: (product.quantity -= 1) };
      }
      return product;
    });


    
  this.setState({ cart: updatedCart });
  }

  onIncr = (id) => {
    const updatedCart = this.state.cart.map((product) => {
      if (id === product.id) {
        return { ...product, quantity: (product.quantity += 1) };
      }
      return product;
    });  
  this.setState({ cart: updatedCart });
  }


  render() {
    const { products, cart } = this.state;
    return (
      <>
        Test Shops
        <Cart products={cart} 
        onDel={this.onDel}  
        onDecr={this.onDecr}  
        onIncr={this.onIncr}/>
        <Catalog 
        products={products}
        AddProduct={this.AddProduct}
         />         
      </>
    );
  }
}
