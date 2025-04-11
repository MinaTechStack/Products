import React, { useContext } from 'react';
import { StoreContext } from './Context';

const Cart = () => {
    const { cart, qtyHandler, removeFromCart } = useContext(StoreContext);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg my-10">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p className="text-center text-gray-600">Your Cart is empty</p>
            ) : (
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="grid grid-cols-[80px_1fr_auto_auto] items-center py-4 border-b">


                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-16 h-16 object-cover rounded"
                                />


                                <div>
                                    <span className="font-medium text-gray-800">{item.title}</span>
                                    <p className="text-gray-500 text-sm">${item.price} each</p>
                                </div>


                                <div className="flex items-center space-x-2">
                                    <button onClick={() => qtyHandler(item.id, "dec")} className="bg-gray-300 w-8 h-8 flex items-center justify-center rounded">-</button>
                                    <span className="text-gray-700 w-6 text-center">{item.qty}</span>
                                    <button onClick={() => qtyHandler(item.id, "inc")} className="bg-gray-300 w-8 h-8 flex items-center justify-center rounded">+</button>
                                </div>


                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 ml-5 text-white px-3 py-1 rounded hover:bg-red-600">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
