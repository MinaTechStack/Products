import React from 'react';

const About = () => {
    return (
        <div className="max-w-6xl mx-auto py-10 px-4 text-teal-800 animate-fade-in">
            <h1 className="text-4xl font-bold mb-10 text-center animate-slide-up text-orange-600">
                About E-Shop
            </h1>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
                <img
                    src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62"
                    alt="Shopping experience"
                    className="w-full h-auto rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
                />
                <div className="animate-fade-right">
                    <p className="mb-4 text-base md:text-lg leading-relaxed text-teal-900">
                        Welcome to <strong className="text-orange-600">E-Shop</strong> – your one-stop destination for quality products at unbeatable prices.
                        We’ve designed our platform to make shopping seamless, smart, and personalized.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-teal-700">
                        Whether you're browsing through categories or managing your cart, our site works effortlessly across all devices.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-14 md:flex-row-reverse">
                <img
                    src="https://images.unsplash.com/photo-1607083206963-26d63b39bba0"
                    alt="Shopping cart"
                    className="w-full h-auto rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
                />
                <div className="animate-fade-left">
                    <p className="mb-4 text-base md:text-lg leading-relaxed text-teal-900">
                        Our powerful cart system lets you add products, apply filters by category, and breeze through checkout. 
                        We make your experience smooth from first click to final delivery.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-teal-700">
                        Responsive design ensures the same great experience—whether you're on mobile, tablet, or desktop.
                    </p>
                </div>
            </div>

            <div className="text-center animate-slide-up px-4">
                <h2 className="text-2xl font-semibold mb-3 text-orange-600">Thank You for Choosing E-Shop!</h2>
                <p className="mb-6 text-lg text-teal-700">We’re excited to serve you and redefine how you shop online. 🚀</p>
                <img
                    src="https://images.unsplash.com/photo-1506617420156-8e4536971650"
                    alt="Thank you"
                    className="mx-auto w-full max-w-md rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
                />
            </div>
        </div>
    );
};

export default About;
