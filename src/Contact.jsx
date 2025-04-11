import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-teal-50 flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-teal-800 text-center mb-6">
                    Contact Us
                </h2>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-orange-600 font-semibold mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-orange-600 font-semibold mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-orange-600 font-semibold mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-4 py-2 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
