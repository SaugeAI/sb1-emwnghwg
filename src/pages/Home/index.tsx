import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-6xl font-bold mb-6 animate-fade-in">
          Discover Amazing Products
        </h1>
        <p className="text-2xl mb-12 text-purple-100">
          Experience shopping like never before with our curated collection
        </p>
        <Link 
          to="/products" 
          className="inline-block px-8 py-4 text-xl bg-white text-purple-600 rounded-full 
                     hover:bg-purple-100 transform hover:scale-105 transition-all duration-300 
                     shadow-lg hover:shadow-xl"
        >
          Explore Collection
        </Link>
      </div>
      
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-purple-100">Handpicked products for the best experience</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-purple-100">Get your products delivered in no time</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-purple-100">We're here to help you anytime</p>
        </div>
      </div>
    </div>
  );
}

export default Home;