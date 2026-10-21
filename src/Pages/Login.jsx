import Header from "../Main/Header";
import Footer from "../Main/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [User_mobile, setmobile] = useState("");
  const [User_password, setpassword] = useState("");
  const [invalid_user , checkuser] = useState('')
  var navigate = useNavigate()

  function login(e) {
    e.preventDefault();

    var obj ={
      user_mobile: User_mobile,
      user_password: User_password,
    };

    axios.post("https://a2zithub.org/dairy/abi/user_login", obj).then((res) => {
      // console.log("Responce", res.data);

      if (res.data.token){
        localStorage.setItem('token',res.data.token)
        navigate('/')
      }
      else{
        checkuser('Invalid Username or Password')
      }

      
    });
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-center text-pink-600 mb-2">
            Welcome To Login Back
          </h1>

          <p className="text-center text-gray-500 mb-8">Login to get started</p>

          <p className="text-center m-6 font-bold bg-red-300 text-red-600 rounded-[30px]">{invalid_user}</p>
          {/* <p>{}</p> */}

          <form onSubmit={login}>
            {/* Mobile */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mobile Number
              </label>

              <input
                type="tel"
                onChange={(e)=>setmobile(e.target.value)}
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                maxLength={10}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>

              <input
                type="password"
                onChange={(e)=>setpassword(e.target.value)}
                placeholder="Enter your password"
                // minLength={}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-pink-700 transition duration-300 shadow-md"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Dont Have Account?
            <Link
              to={"/register_new_user"}
              className="text-pink-600 font-bold ml-1 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
