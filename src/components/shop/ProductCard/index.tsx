import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../../utils/formatCurrency';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image, category }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <Link to={`/product/${id}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110" 
          />
          <span className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-purple-600">
              {formatCurrency(price)}
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg transform transition-all duration-300 hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;