import React, { createContext, useState, useEffect } from 'react'
const StoreContext = createContext();
import axios from 'axios';


export default function Context(props) {
    const [allproduct, SetAllProduct] = useState([]);
    const [cart, SetCart] = useState([]);

    useEffect(
        () => {
            let API = axios.get("https://dummyjson.com/products");

            API.then(
                (response) => {
                    SetAllProduct(response.data.products)

                }

            ).catch(
                (error) => {
                    SetAllProduct([])

                }
            )

        },
        []
    )

    const addToCart = (id) => {
        const product = allproduct.find((prod) => prod.id == id);
        if (product) {
            const cartProduct = cart.find((cd) => cd.id == id);
            if (cartProduct) {
                const updateCart = cart.map(
                    (item) => {
                        return item.id == id ? { ...item, qty: item.qty + 1 } : item
                    }
                )
                SetCart(updateCart)

            } else {
                SetCart([...cart, { ...product, qty: 1 }])
            }

        }
    }


    const qtyHandler = (id, flag) => {
        let updateCart;
        const product = allproduct.find((prod) => prod.id == id);
        if (product) {
            const cartProduct = cart.find((cd) => cd.id == id);
            if (cartProduct) {
                if (flag == 1) {
                    updateCart = cart.map(
                        (item) => {
                            return item.id == id ? { ...item, qty: item.qty + 1 } : item
                        }
                    )
                } else if (flag == 2 && cartProduct.qty > 1) {
                    updateCart = cart.map(
                        (item) => {
                            return item.id == id ? { ...item, qty: item.qty - 1 } : item
                        }
                    )
                } else {
                    return
                }
                SetCart(updateCart)

            }
        }
    }

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        SetCart(updatedCart);
    };



    return (
        <StoreContext.Provider value={{ addToCart, cart, qtyHandler, removeFromCart }} >
            {props.children}
        </StoreContext.Provider >
    )
}
export { StoreContext };
