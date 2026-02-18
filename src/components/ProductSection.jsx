import React from 'react';
import './ProductSection.css';

const ProductSection = ({ title, products }) => {
  return (
    <div className="product-section">
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <a href="#" className="product-title">{product.name}</a>
              <div className="rating">
                {Array(Math.floor(product.rating)).fill('⭐').join('')} 
                <span className="rating-count">({product.reviews})</span>
              </div>
              <div className="price-block">
                <span className="currency">₹</span>
                <span className="price-whole">{product.price.split('.')[0]}</span>
                <span className="price-fraction">{product.price.split('.')[1]}</span>
              </div>
              <p className="mrp">M.R.P: <strike>{product.mrp}</strike> ({product.discount}% off)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
