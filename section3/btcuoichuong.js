import './Product.css';
import React from 'react';

const ProductCard = ({ title, price, originalPrice, image, rating, onSale, button }) => {
  return (
    <div className='productt'>
    <div className="product-card">
      {onSale && <div className="sale-badge">Sale</div>}
      <img src={image} alt={title} />
      <h3>{title}</h3>
      {rating && <div className="rating">{'⭐'.repeat(rating)}</div>}
      {originalPrice && <p className="original-price">${originalPrice}</p>}
      <p className="price">${price}</p>
      <button>{button}</button>
    </div>
    </div>
  );
};


const products = [
  {
    title: 'Fancy Product',
    price: '40.00 - 80.00',
    originalPrice: null,
    image: 'https://via.placeholder.com/450x300',
    rating: null,
    onSale: false,
    button: 'view option',
  },
  {
    title: 'Special Item',
    price: '18.00',
    originalPrice: '20.00',
    image: 'https://via.placeholder.com/450x300',
    rating: 4,
    onSale: true,
    button: 'Add to Cart',
  },
  {
    title: 'Sale Item',
    price: '25.00',
    originalPrice: '50.00',
    image: 'https://via.placeholder.com/450x300',
    rating: null,
    onSale: true,
    button: 'Add to Cart',
  },
  {
    title: 'Popular Item',
    price: '40.00',
    originalPrice: null,
    image: 'https://via.placeholder.com/450x300',
    rating: 5,
    onSale: false,
    button: 'Add to Cart',
  },
  {
    title: 'Sale Item',
    price: '25.00',
    originalPrice: '50.00',
    image: 'https://via.placeholder.com/450x300',
    rating: null,
    onSale: true,
    button: 'Add to Cart',
  },
  {
    title: 'Fancy Product',
    price: '120.00 - 280.00',
    originalPrice: null,
    image: 'https://via.placeholder.com/450x300',
    rating: null,
    onSale: false,
    button: 'view option',
  },
  {
    title: 'Special Item',
    price: '18.00',
    originalPrice: '20.00',
    image: 'https://via.placeholder.com/450x300',
    rating: 4,
    onSale: true,
    button: 'Add to Cart',
  },
  {
    title: 'Popular Item',
    price: '40.00',
    originalPrice: null,
    image: 'https://via.placeholder.com/450x300',
    rating: 5,
    onSale: false,
    button: 'Add to Cart',
  },
  {
    title: 'Popular Item',
    price: '40.00',
    originalPrice: null,
    image: 'https://via.placeholder.com/450x300',
    rating: 5,
    onSale: false,
    button: 'Add to Cart',
  },
  {
    title: 'Popular Item',
    price: '40.00',
    originalPrice: null,
    image: 'https://via.placeholder.com/450x300',
    rating: 5,
    onSale: false,
    button: 'Add to Cart',
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};


export default ProductList;