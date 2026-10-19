import { BrowserRouter,Route,Routes } from "react-router-dom"

import Home from "./Pages/Home"
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Card from "./Pages/Card";
import View_products from "./Pages/View_products";
import Registar from "./Pages/Registar";
import User from "./Pages/User";
import Cart from "./Pages/Cart";
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Card/>}/>
        <Route path='/view_product/:product_id' element={<View_products/>}/>
        <Route path='/register_new_user' element={<Registar/>}/>
        <Route path='/User_info' element={<User/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;