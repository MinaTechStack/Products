import axios from "axios";
import { Star, ShoppingCart, Truck, RefreshCcw } from "lucide-react";
import { useEffect, useState,useContext  } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "./Context";

export default function ProductDetails() {
  const [product, SetProduct] = useState({});
  const { productId } = useParams();

  const { addToCart } = useContext(StoreContext);

  const getProduct = () => {
    axios.get("https://dummyjson.com/products/" + productId).then(
      (response) => {
        SetProduct(response.data)
      }
    ).catch(
      (error) => {
console.log(error)
      }
    )
  }
  useEffect(
    () => {
      getProduct()
    },
    [productId]
  )



  return (
    <div className="max-w-[800px] mt-3 justify-center items-center mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="flex flex-col gap-4 p-4  text-yellow-500">
        {
          product?.images?.map((path, i) => {
            return (
              <img src={path} className="w-[30px] h-[30px]" />
            )
          })
        }
      </div>
      <div className="flex flex-col md:flex-row gap-6 ">
        <img className="w-64 mx-auto  h-64 object-cover rounded-lg" src={product.thumbnail} alt={product.title} />
      </div>
      <div className="p-4 flex flex-col justify-center">
        <h2 className="text-lg   font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        
        <p className="text-gray-800 font-bold text-lg mt-2">${product.price}</p>
        <p className="text-gray-500 text-sm">Stock: {product.stock}</p>
        <p className="text-gray-500 text-sm">{product.shippingInformation}</p>
        <div className="flex items-center gap-4 mt-4">
          <button onClick={() => addToCart(product)} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
          <Truck className="w-6 h-6 text-gray-600" title="Shipping Info" />
          <RefreshCcw className="w-6 h-6 text-gray-600" title="Return Policy" />
        </div>
      </div>
    </div>
  );
}
