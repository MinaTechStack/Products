import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { StoreContext } from './Context.jsx';

export default function Product() {
    const { addToCart } = useContext(StoreContext);
    const [allproduct, SetAllProduct] = useState([]);
    const [categories, SetCategories] = useState([]);
    const [loading, SetLoading] = useState(false);
    const [totalpage, SetTotalpage] = useState(0);
    const [current, SetCurrent] = useState(0);
    const { categorySlug } = useParams();
    const limit = 30;



    const getCategory = () => {
        axios.get("https://dummyjson.com/products/categories").then(
            (response) => {
                SetCategories(response.data)

            }

        ).catch(
            (error) => {

            }
        )
    }



    useEffect(
        () => {
            getCategory()
        },
        []
    )

    useEffect(
        () => {
            let API = "";
            SetLoading(true)
            if (categorySlug == null) {
                API = axios.get("https://dummyjson.com/products");
            } else {
                API = axios.get("https://dummyjson.com/products/category/" + categorySlug)
            }
            API.then(
                (response) => {
                    SetAllProduct(response.data.products)
                    SetTotalpage(Math.ceil(response.data.total / limit))

                }

            ).catch(
                (error) => {
                    SetAllProduct([])

                }
            ).finally(() => [
                SetLoading(false)
            ])

        },
        [categorySlug]
    )

    useEffect(
        () => {
            SetLoading(true)
            axios.get(`https://dummyjson.com/products?skip=${current * limit}`).then(
                (response) => {
                    SetAllProduct(response.data.products)
                }

            ).catch(
                (error) => {
                    SetAllProduct([])
                }
            ).finally(() => [
                SetLoading(false)
            ])
        },
        [current]
    )

    const pagination = [];
    for (let i = 0; i < totalpage; i++) {
        pagination.push(
            <li
                key={i}
                onClick={() => SetCurrent(i)}
                className={`flex cursor-pointer items-center justify-center px-4 h-10 leading-tight border border-gray-300 
                ${current === i ? "bg-blue-500 text-white" : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"} 
                dark:hover:text-black`}
            >
                {i + 1}
            </li>
        );
    }


    return (
        <div className='w-full'>
            <div className='max-w-[1300px] m-auto p-2 '>
                <div className="grid items-start gap-5  grid-cols-1 md:grid-cols-12">
                    <ul className=' md:col-span-3 lg:col-span-2'>
                        <Link to="/">  <li className={`w-full ${categorySlug == null ? "bg-teal-100" : ""} mb-4 p-2 shadow`}>All</li></Link>
                        {
                            categories.map((cat, i) => {
                                return (
                                    <Link to={`/${cat.slug}`}><li className={`w-full ${categorySlug == cat.slug ? "bg-teal-100" : ""} mb-4 p-2 shadow`}>{cat.name}</li></Link>

                                )
                            })
                        }
                    </ul>
                    <div className='md:col-span-9 lg:col-span-10 items-start'>
                        <div className='md:grid grid-cols-3 gap-5 items-start'>
                            {
                                loading == true ?
                                    [1, 2, 3, 4, 5, 7, 8, 9].map((skeleton) => {
                                        return (
                                            <ProductCard />
                                        )
                                    })
                                    : allproduct.map((prod, index) => {
                                        return (
                                            <div key={prod.id} className="group  max-w-xs p-3 rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-md" to={`/ProductDetails/${prod.id}`}>
                                                <Link to={`/ProductDetails/${prod.id}`}>
                                                    <div >
                                                        <div className="flex h-60 overflow-hidden" href="#">
                                                            <img className=" h-48 w-full object-cover" src={prod.thumbnail} alt='' />

                                                            <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                                                                <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
                                                                <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                                                                <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                                                            </div>

                                                        </div>
                                                        <div className="mt-4 mx-auto px-5 pb-3">
                                                            <h5 className="text-xl tracking-tight text-slate-900">{prod.title}</h5>

                                                            <div className="mt-2 mb-5 flex items-center justify-between">
                                                                <p>
                                                                    <span className="text-3xl font-bold text-slate-900">${prod.price}</span>
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </Link>
                                                <button
                                                    onClick={() => addToCart(prod)}
                                                    className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 text-sm transition"
                                                >
                                                    Add to cart
                                                </button>


                                            </div>


                                        )

                                    }
                                    )
                            }
                        </div>
                        <ul className="flex mt-5 justify-center gap-2 mb-10 -space-x-px text-sm">
                            {pagination}

                        </ul>
                    </div>


                </div>

            </div>

        </div >
    )
}

const ProductCard = () => {
    return (
        <div className="max-w-xs p-3 rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-md relative">
            <div className="animate-pulse">
                <div className="h-48 bg-gray-300 rounded-md"></div>
                <div className="mt-4 h-4 w-3/4 bg-gray-300 rounded"></div>
                <div className="mt-2 h-4 w-1/2 bg-gray-300 rounded"></div>
                <div className="mt-5 h-10 w-full bg-gray-300 rounded"></div>
            </div>
            <div className="flex h-60 overflow-hidden relative">
                <img
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                    src="https://via.placeholder.com/150"
                    alt=""
                />
                <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                    <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
                    <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                    <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
                </div>
            </div>

        </div>
    );
};


