import Header from "../Main/Header";
import Footer from "../Main/Footer";
import Products from "../Main/Products";

import { useState,useEffect } from "react";
import axios from "axios";
function Card(){

    let [products , setproduct] = useState([])

useEffect(()=>{
     axios.get('https://a2zithub.org/dairy/abi/product_det').then((responce)=>{
      //  console.log("responce",responce.data)
        setproduct(responce.data)
    })
},[])



  
    return(
        <>
            <Header/>
            <h1 className="text-[40px] font-bold ml-[40%] mt-[30px] font-['Times_New_Roman']">Products Page</h1>
            
 <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-600">
              Our Collection
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Trending Products
            </h2>
            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Discover products you'll love.
            </p>
          </div>

          <div className="rounded-xl bg-white px-4 py-3 font-semibold shadow-sm">
            🛒 Cart:
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {  
                products.map((val, index) => (
                <div key={index} className="w-full">
                        <Products image ={val} />
                </div>
                )) 
            }
        </div>

      </div>
    </section>

            <Footer/>
        </>
    )
}

export default Card;