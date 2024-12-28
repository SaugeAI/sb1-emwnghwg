import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">SaugeAI Store</h3>
            <p className="text-purple-100">
              Your premium destination for quality products and exceptional service.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/products" className="text-purple-100 hover:text-white transition-colors">Products</a></li>
              <li><a href="/cart" className="text-purple-100 hover:text-white transition-colors">Cart</a></li>
              <li><a href="/account" className="text-purple-100 hover:text-white transition-colors">Account</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-purple-100">
              <li>Email: contact@saugeai.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 AI Street, Tech City</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg flex-grow text-gray-800 focus:outline-none"
              />
              <button className="bg-purple-800 px-4 py-2 rounded-r-lg hover:bg-purple-900 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-purple-400/30 text-center text-purple-100">
          <p>&copy; 2024 SaugeAI Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;