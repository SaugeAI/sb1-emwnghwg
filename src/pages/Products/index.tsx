import React from 'react';
import ProductGrid from '../../components/shop/ProductGrid';

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our curated collection of premium products designed to enhance your lifestyle
        </p>
      </div>
      <ProductGrid />
    </div>
  );
};

export default Products;