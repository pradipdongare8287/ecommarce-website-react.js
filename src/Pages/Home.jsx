import Header from "../Main/Header";
import Footer from "../Main/Footer";
import Products from "../Main/Products";

import { useState ,useEffect} from "react";
import axios from "axios";

function Home(){
  
const [slides,setslieds] = useState([])

const [control , setcontrol] = useState(0)

const [bestdeals , setdeails] = useState([])
const [topsellingproduct , settopseeling] = useState([])

useEffect(()=>{
  axios.get('https://a2zithub.org/dairy/abi/slider_det').then((res)=>{
    setslieds(res.data)

  axios.get('https://a2zithub.org/dairy/abi/feature_product').then((res)=>{
 
      setdeails(res.data)
  })

  axios.get('https://a2zithub.org/dairy/abi/best_selling_product').then((res)=>{
    
    settopseeling(res.data)
  })

  })
},[])



useEffect(() => {
  if (slides.length === 0) return;

  const time = setInterval(() => {
    setcontrol((prev) => (prev + 1) % slides.length);
  }, 2000);

  return () => clearInterval(time);
}, [slides.length]);

    return(
        <>
            <Header/>
            {/* <h1 className="text-[40px] font-bold ml-[40%] mt-[30px] font-['Times_New_Roman']">Home Page</h1> */}
            
                <div className="h-[350px] w-[90%] ml-[5%] bg-red-500 mt-[50px]">

            {    slides.length > 0 && (
                <img
                  src={slides[control]?.slider_img}
                  alt="Slider"
                  className="h-full w-full rounded-[30px] object-cover"
                />
            )}
                </div>

                 <section className="w-[90%] mx-auto mt-16 mb-16">

      <div className="mb-8">
        <p className="text-pink-600 font-semibold uppercase tracking-widest">
          Limited Time Offers
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          feature_product
        </h2>

        <p className="text-gray-500 mt-2">
          Grab your favourite products at amazing prices!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Product 1 */}
        
    {
      bestdeals.map((val,index)=>(
        <>
        <Products image={val}/>
        {/* <h1>{val}</h1> */}
        </>

      ))
    }
      </div>
    </section>

                                        {/* Top Selling Product */}

         <section className="w-[90%] mx-auto mt-16 mb-16">

      {/* Heading */}
      <div className="mb-8">
        <p className="text-pink-600 font-semibold uppercase tracking-widest">
          Customer Favorites
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Top Selling Products
          
        </h2>

        <p className="text-gray-500 mt-2">
          Discover our most popular products!
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       
      {
        topsellingproduct.map((img,index)=>(
        <Products image={img}/>

        ))
      }

      </div>
    </section>
            <Footer/>
        </>
    )
}

export default Home;