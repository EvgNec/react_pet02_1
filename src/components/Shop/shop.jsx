import React from "react";
import Container from "./UI/Container";
import Example from "./Example/Example";
import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import ProductsList from "./ProductsList/ProductsList";

export default class Shop extends React.Component {
  state = {
    products: [
      { id: 1, image: "🍟", price: 8, name: "Fries" },
      { id: 2, image: "🥤", price: 4, name: "Coca-Cola" },
      { id: 3, image: "🍔", price: 12, name: "Burger" },
    ],
    cart: [],
    isCartOpen: false,
  };

  handleToogleCart = () => {
    this.setState((prevState) => ({ isCartOpen: !prevState.isCartOpen }));
  };

  handleBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      this.handleToogleCart();
    }
  };
	handleRemoveFromCart = (id) => {
		this.setState((prev) => ({
			todoList: prev.cart.filter((product) => product.id !== id),
		}))};
  // handleRemoveFromCart = (id) => {
  //     //  оновлюємо корзину продуктів пілся видалення і перезаписуємо стейт
  //     const updatedCart = this.state.cart.filter(
  //       (product) => product.id === id

  //     );
  //     console.log("🚀 ~ Shop ~ id:", id)
  //     console.log("🚀 ~ Shop ~ updatedCart:", updatedCart)
  //     this.setState({ cart: updatedCart });
  //   // this.setState((prev) => ({    
	// 	// 	cart: prev.cart.filter((cart) => cart.id !== id)}))
  // };

  handleAddToCart = (id) => {
    // перевіряємо чи є цей пролукт у корзині
    const isProductInCart = this.state.cart.find(
      (product) => product.id === id
    );

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
  
  render() {
    const { cart, products } = this.state;

    return (
      <Container>
        {/* <Example/> */}

        <Header handleToogleCart={this.handleToogleCart} cart={cart} />
      <ProductsList
          handleAddToCart={this.handleAddToCart}
          products={products}
        />
        {this.state.isCartOpen && (
          <Cart
            cart={cart}
            handleBackdrop={this.handleBackdrop}
            handleToogleCart={this.handleToogleCart}
            handleRemoveFromCart={this.handleRemoveFromCart}
          />
        )}
      </Container>
    );
  }
}