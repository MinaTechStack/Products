import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <section className="relative h-[80vh] rounded-xl overflow-hidden shadow-xl mb-12">
                <img
                    src="https://images.unsplash.com/photo-1647221597996-54f3d0f73809?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxvbmxpbmUlMjBzaG9wcGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="E-Shop Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-teal-100/60 flex flex-col justify-center items-center text-center px-6">
                    <h1 className="text-5xl font-extrabold text-teal-800 drop-shadow-md mb-4">Welcome to E-Shop</h1>
                    <p className="text-lg sm:text-xl text-white mb-6 max-w-2xl">
                        Explore top-quality products with unbeatable value. Start your seamless shopping journey now.
                    </p>
                    <Link to="/shop">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition text-lg">
                            Start Shopping
                        </button>
                    </Link>
                </div>
            </section>

            <section className="text-center mb-20">
                <h2 className="text-3xl font-bold text-orange-700 mb-4">Why Choose E-Shop?</h2>
                <p className="text-orange-600 text-lg max-w-2xl mx-auto">
                    From curated collections to fast delivery, we bring a smart shopping experience made just for you. Quality, convenience, and care — all in one place.
                </p>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                {[
                    { title: "Fashion", color: "bg-orange-100", text: "text-orange-800" },
                    { title: "Electronics", color: "bg-teal-100", text: "text-teal-800" },
                    { title: "Home Decor", color: "bg-yellow-100", text: "text-yellow-800" }
                ].map((item, index) => (
                    <div key={index} className={`${item.color} rounded-xl p-6 shadow-md`}>
                        <h3 className={`text-2xl font-semibold ${item.text}`}>{item.title}</h3>
                        <p className={`${item.text} mt-2`}>Carefully selected just for your lifestyle.</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Home;
