import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-10 pb-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-evenly gap-10 text-center md:text-left">
        
        <div className="max-w-sm">
          <h2 className="text-white text-xl font-semibold mb-4">About E-Shop</h2>
          <p className="text-sm leading-relaxed">
            E-Shop is your go-to destination for premium products at unbeatable prices.
            We aim to deliver a seamless, smart, and personalized shopping experience right at your fingertips.
          </p>
        </div>

        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Quick Links</h2>
          <nav className="flex flex-col gap-2 text-sm">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Shop</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Cart</a>
          </nav>
        </div>

        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Connect With Us</h2>
          <p className="text-sm mb-2">
            <span className="text-white font-medium">Email:</span> support@eshop.com
          </p>
          <p className="text-sm mb-3">
            <span className="text-white font-medium">Phone:</span> +91 98765 43210
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-2">
            <a href="#" className="hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.03 3.66 9.21 8.44 9.93v-7.02H8.08v-2.91h2.36V9.17c0-2.34 1.43-3.62 3.52-3.62.7 0 1.41.12 1.41.12v2.43h-1.3c-1.29 0-1.69.8-1.69 1.62v1.94h2.87l-.46 2.91h-2.41v7.02C18.34 21.28 22 17.1 22 12.07z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.64 4.56c-.87.39-1.8.65-2.78.77a4.83 4.83 0 0 0 2.12-2.67 9.48 9.48 0 0 1-3.03 1.16 4.79 4.79 0 0 0-8.18 4.37 13.58 13.58 0 0 1-9.86-5 4.81 4.81 0 0 0-.65 2.41 4.78 4.78 0 0 0 2.13 3.98 4.75 4.75 0 0 1-2.16-.6v.06a4.79 4.79 0 0 0 3.84 4.69 4.77 4.77 0 0 1-2.15.08 4.8 4.8 0 0 0 4.48 3.33 9.62 9.62 0 0 1-7.09 1.99A13.6 13.6 0 0 0 7.55 21c8.83 0 13.66-7.31 13.66-13.65 0-.21 0-.42-.02-.63a9.6 9.6 0 0 0 2.36-2.45z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4 px-4">
        &copy; 2025 E-Shop. All rights reserved.
      </div>
    </footer>
  );
}
