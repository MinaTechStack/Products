import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './Product';
import Layout from './Layout';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import About from './about';
import Contact from './Contact';
import Login from './Login';
import Home from './Home';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Home />
        },
        {
          path: "/:categorySlug?",
          element: <Product />
        },
        {
          path:"/shop",
          element:<Product/>
        },
        {
          path: "/ProductDetails/:productId",
          element: <ProductDetails />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/login",
          element: <Login />
        }
      ]
    }

  ]);



  return (
    <RouterProvider router={router} />
  )
}
