import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { StoreContext } from './Context';

export default function Header() {
    const { cart } = useContext(StoreContext);
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <header className="bg-white shadow-md py-4 px-6">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <div className="text-2xl font-bold text-gray-800">E-Shop</div>
                </Link>

                <button
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="md:hidden text-gray-800"
                >
                    {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                <nav className="hidden md:flex gap-6">
                    <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
                    <Link to="/shop" className="text-gray-600 hover:text-blue-600 transition">Shop</Link>
                    <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login" className="bg-blue-500 text-white px-3 py-2 rounded-md transition hover:bg-blue-700">
                        Login
                    </Link>
                    <Link to="/cart" className="bg-green-500 flex items-center gap-2 text-white px-3 py-2 rounded-md transition hover:bg-green-700 relative">
                        <ShoppingCart />
                        Cart
                        <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                            {cart.length}
                        </span>
                    </Link>
                </div>
            </div>

            {mobileMenu && (
                <div className="md:hidden mt-4 flex flex-col gap-3">
                    <Link to="/" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileMenu(false)}>Home</Link>
                    <Link to="/shop" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileMenu(false)}>Shop</Link>
                    <Link to="/about" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileMenu(false)}>About</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileMenu(false)}>Contact</Link>
                    <Link to="/login" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileMenu(false)}>Login</Link>
                    <Link to="/cart" className="text-gray-700 hover:text-blue-600" onClick={() => setMobileMenu(false)}>Cart ({cart.length})</Link>
                </div>
            )}
        </header>
    );
}
