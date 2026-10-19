import Header from "../Main/Header"
import Footer from "../Main/Footer"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";

function View_products() {

    const {product_id} = useParams()
    const [product , view_product] = useState({})

    useEffect(()=>{
        var product = {
                "product_id":product_id,
                'token':localStorage.getItem('token')
        }
        axios.post('https://a2zithub.org/dairy/abi/product_by_id',product).then((res)=>{
            // console.log('Responce',res.data)
            view_product(res.data)
            
        })
    },[])


    function product_add_cart(){
        var product = {
                "product_id":product_id,
                'token':localStorage.getItem('token')
            }
            axios.post("https://a2zithub.org/dairy/abi/addtocart",product).then((res)=>{
                // console.log('responce',res)
            })
 
        }
         const product_ad_msg = ()=> toast.success('Product Add Successfully')
    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-100 px-4 py-10">
                <h1 className="text-4xl md:text-[50px] font-bold text-center mb-10">
                    View Product
                </h1>
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Product Image Section */}
                    <div className="flex items-center justify-center bg-gray-50 rounded-xl p-5">
                        <img
                            src={product.product_img}
                            alt="Product"
                            className="w-full max-w-md h-80 object-contain rounded-xl hover:scale-105 transition duration-300"
                        />
                    </div>
                    {/* Product Details Section */}
                    <div className="flex flex-col justify-center gap-5">
                        <p className="text-sm text-pink-600 font-semibold uppercase tracking-wider">
                            Featured Product
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800">
                            {product.product_name} 
                        </h2>

                        <p className="text-3xl font-bold text-green-600">
                            ₹ {product.price}
                        </p>

                        <p className="text-gray-600 leading-7">
                           {product.details}
                        </p>

                        <div className="border-t border-gray-200 pt-4">
                            <p className="text-green-600 font-semibold">
                                In Stock
                            </p>
                            <p className="text-gray-600 font-semibold mt-10">
                                Manufacturing Date By :- {product.created_at}
                            </p>
                        </div>

                        <button
                            onClick={()=>{
                                product_add_cart();
                                product_ad_msg()
                            } }
                            className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-700 transition duration-300">
                            Add to Cart
                           
                        </button>
                         <ToastContainer />

                        <button
                            className="w-full border-2 border-pink-600 text-pink-600 py-3 rounded-lg font-bold hover:bg-pink-600 hover:text-white transition duration-300">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default View_products;
