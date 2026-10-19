
import Header from "../Main/Header";
import Footer from "../Main/Footer";

import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {

     const [products ,setproducts] = useState([])

    useEffect(()=>{
        var token = {
            'token':localStorage.getItem('token')
        }
        axios.post('https://a2zithub.org/dairy/abi/cart_list',token).then((res)=>{
            // console.log('responce',res.data)
            setproducts(res.data)
        })

   

    },[])
    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-50 px-4 py-10">
                <div className="max-w-6xl mx-auto">

                    {/* Page Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">
                            My Shopping Cart
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Review your products before checkout
                        </p>
                    </div>

                    {/* Cart Table */}
                    <div className="bg-white rounded-xl shadow-md overflow-x-auto">
                        <table className="w-full min-w-[700px] text-left">
                            <thead>
                                <tr className="bg-pink-600 text-white">
                                    <th className="p-4">Sr.no</th>
                                    <th className="p-4">Product Img</th>
                                    <th className="p-4">Product Name</th>
                                    <th className="p-4">Product Qty</th>
                                    <th className="p-4">Product Price</th>
                                    <th className="p-4">Total</th>
                                    <th className="p-4">Product Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    products.map((val,index)=>(
<tr className="border-b hover:bg-pink-50 transition">
                                    <td className="p-4">{index+1}</td>

                                    <td className="p-4">
                                        <img
                                            src={val.product_img}
                                            alt="Product"
                                            className="w-16 h-16 rounded-lg object-cover"
                                        />
                                    </td>

                                    <td className="p-4 font-semibold text-gray-700">
                                        {val.product_name}
                                    </td>

                                    <td className="p-4">
                                        <input
                                            type="number"
                                            min={val.qty}
                                            defaultValue="1"
                                            className="w-16 border border-gray-300 rounded-md p-2 text-center outline-none focus:border-pink-500"
                                        />
                                    </td>

                                    <td className="p-4 font-medium">₹{val.price}</td>

                                    <td className="p-4 font-bold text-pink-600">
                                        ₹{val.price}
                                    </td>

                                    <td className="p-4">
                                        <button
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition"
                                        >
                                           {val.product_lable}
                                        </button>
                                    </td>
                                </tr>
                                    ))
                                }
                                
                            </tbody>
                        </table>
                    </div>

                    {/* Cart Summary */}
              
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Cart;
