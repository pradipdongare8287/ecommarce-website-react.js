import { Link } from "react-router-dom";

function Products(props){
    return(
        <>
        <Link to={`/view_product/${props.image.product_tbl_id}`}>
        <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
          <div className="relative overflow-hidden">
            <img
              src={props.image.product_img}
              className="h-[230px] w-full object-cover hover:scale-110 transition duration-500"
              alt="Sneakers"/>

            <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-3 py-2 rounded-full">
              {props.image.product_tbl_id}% OFF
            </span>
          </div>

          

          <div className="p-5">
            <h3 className="text-lg font-semibold">{props.image.product_name}</h3>
          

            <div className="flex gap-3 items-center mt-3">
              <span className="text-xl font-bold text-green-600">₹{props.image.price}</span>
              <span className="text-red-400 line-through">₹2,499</span>
            </div>

            <button className="w-full mt-5 bg-gray-900 text-white py-3 rounded-xl hover:bg-pink-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
        </Link>
        </>
    )
}

export default Products;
 