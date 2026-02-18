import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';
import ProductSection from '../components/ProductSection';

// Mock Data
const products1 = [
  { name: "Echo Dot (4th Gen) | Smart speaker with Alexa", image: "https://m.media-amazon.com/images/I/61MBCNtrK9L._AC_UY218_.jpg", rating: 4.5, reviews: "44,123", price: "3499.00", mrp: "4499.00", discount: 22 },
  { name: "Fire TV Stick 4K | Streaming Device", image: "https://m.media-amazon.com/images/I/51CgKGfMelL._AC_UY218_.jpg", rating: 4.7, reviews: "21,876", price: "5999.00", mrp: "6499.00", discount: 8 },
  { name: "Kindle Paperwhite (10th Gen) - 8GB", image: "https://m.media-amazon.com/images/I/611XJK2epkL._AC_UY218_.jpg", rating: 4.6, reviews: "12,987", price: "12999.00", mrp: "14999.00", discount: 13 },
  { name: "Samsung Galaxy M33 5G (Deep Ocean Blue, 6GB)", image: "https://m.media-amazon.com/images/I/81I3w4OXUYL._AC_UY218_.jpg", rating: 4.1, reviews: "4,567", price: "16999.00", mrp: "24999.00", discount: 32 },
];

const products2 = [
  { name: "HP 15s, 11th Gen Intel Core i3", image: "https://m.media-amazon.com/images/I/81scQ75pWqL._AC_UY218_.jpg", rating: 4.2, reviews: "1,234", price: "38990.00", mrp: "48999.00", discount: 20 },
  { name: "Sony WH-1000XM4 Industry Leading Wireless Noise Cancelling", image: "https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_UY218_.jpg", rating: 4.8, reviews: "8,901", price: "24990.00", mrp: "29990.00", discount: 17 },
  { name: "Apple iPhone 13 (128GB) - Midnight", image: "https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg", rating: 4.9, reviews: "50,000", price: "69900.00", mrp: "79900.00", discount: 13 },
  { name: "Logitech G502 Hero High Performance Wired Gaming Mouse", image: "https://m.media-amazon.com/images/I/51jGAjG8uYL._AC_UY218_.jpg", rating: 4.6, reviews: "30,123", price: "3995.00", mrp: "4995.00", discount: 20 },
];

const Home = () => {
  return (
    <div className="home-layout">
      <Navbar />
      <Hero />
      <div className="home-content">
        <ProductSection title="4 Stars and above products for you" products={products1} />
        <ProductSection title="Top selling Office Products" products={products2} />
        <ProductSection title="Recommended for you" products={products1} />
        <div style={{ padding: '20px', textAlign: 'center', color: '#555', fontSize: '0.8rem' }}>
          Conditions of Use & Sale | Privacy Notice | Interest-Based Ads <br/>
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
};

export default Home;
