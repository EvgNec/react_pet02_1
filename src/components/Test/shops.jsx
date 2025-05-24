import React from 'react';
import Catalog from './Catalog';

export default class Shop extends React.Component {
  state = {
    products: [
      {
        id: 101,
        sku: 'SKU-101',
        name: 'Бездротові навушники X100',
        price: 1299.0,
        currency: 'UAH',
        brand: 'Sony',
        category: 'Аудіо',
        in_stock: true,
        image_url:
          'https://images.unsplash.com/photo-1580894732444-c7c8187a5ff6',
      },
      {
        id: 102,
        sku: 'SKU-102',
        name: 'Смарт-годинник FitBand 5',
        price: 1899.0,
        currency: 'UAH',
        brand: 'Xiaomi',
        category: 'Годинники',
        in_stock: true,
        image_url:
          'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7',
      },
      {
        id: 103,
        sku: 'SKU-103',
        name: 'Ноутбук HP Pavilion 15',
        price: 19999.0,
        currency: 'UAH',
        brand: 'HP',
        category: 'Ноутбуки',
        in_stock: false,
        image_url:
          'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
      },
      {
        id: 104,
        sku: 'SKU-104',
        name: 'Ігрова миша Razer Viper',
        price: 1399.0,
        currency: 'UAH',
        brand: 'Razer',
        category: 'Периферія',
        in_stock: true,
        image_url:
          'https://images.unsplash.com/photo-1600267165685-f1a0ea23e278',
      },
      {
        id: 105,
        sku: 'SKU-105',
        name: 'Мобільний телефон Galaxy A54',
        price: 10999.0,
        currency: 'UAH',
        brand: 'Samsung',
        category: 'Смартфони',
        in_stock: true,
        image_url:
          'https://images.unsplash.com/photo-1580910051074-4b1e53c28949',
      },
      {
        id: 106,
        sku: 'SKU-106',
        name: 'Пилосос Dyson V11',
        price: 17999.0,
        currency: 'UAH',
        brand: 'Dyson',
        category: 'Побутова техніка',
        in_stock: true,
        image_url:
          'https://images.unsplash.com/photo-1615874959474-d609b3b4b1ff',
      },
      {
        id: 107,
        sku: 'SKU-107',
        name: 'Пральна машина LG F4',
        price: 15999.0,
        currency: 'UAH',
        brand: 'LG',
        category: 'Побутова техніка',
        in_stock: false,
        image_url:
          'https://images.unsplash.com/photo-1624970283245-01c1b0c059b5',
      },
      {
        id: 108,
        sku: 'SKU-108',
        name: 'Телевізор Philips 43"',
        price: 9999.0,
        currency: 'UAH',
        brand: 'Philips',
        category: 'Телевізори',
        in_stock: true,
        image_url:
          'https://images.unsplash.com/photo-1616627988855-f3cc322cbbab',
      },
      {
        id: 109,
        sku: 'SKU-109',
        name: 'Кавоварка DeLonghi EC685',
        price: 6599.0,
        currency: 'UAH',
        brand: 'DeLonghi',
        category: 'Кухонна техніка',
        in_stock: true,
        image_url:
          'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5',
      },
      {
        id: 110,
        sku: 'SKU-110',
        name: 'Електросамокат Mi Electric Scooter',
        price: 16999.0,
        currency: 'UAH',
        brand: 'Xiaomi',
        category: 'Транспорт',
        in_stock: true,
        image_url:
          'https://images.unsplash.com/photo-1594125674790-b933f7ec7b49',
      },
    ],
    cart: [],
    isCartOpen: false,
  };
  render() {
    const { products } = this.state;
    return (
      <>
        Test Shops
        <Catalog products={products} />
      </>
    );
  }
}
