import Header from "../Main/Header";
import Footer from "../Main/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){

    var Usenavigataion = useNavigate()


    const [user_name,  setname] = useState('')
    const [user_mobile , setmobile] = useState('')
    const [user_email , setemail] = useState('')
    const [user_password , setpassword]= useState('')

    function register(e){
        e.preventDefault()
        var Obj = {
            user_name,
            user_mobile,
            user_email,
            user_password
        }

        axios.post('https://a2zithub.org/dairy/abi/user_register',Obj).then((res)=>{
            console.log('responce',res)
           Usenavigataion('/login')
        })
    }

    return(
        <>
        <Header/>

        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

                <h1 className="text-3xl font-bold text-center text-pink-600 mb-2">
                    Create Account
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Register to get started
                </p>

                <form onSubmit={register}>

                    {/* Username */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Username
                        </label>

                        <input
                            type="text"
                            onChange={(e)=>setname(e.target.value)}
                            placeholder="Enter your username"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            onChange={(e)=>setemail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                        />
                    </div>

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
                            minLength={8}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
                        />
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-pink-700 transition duration-300 shadow-md"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center text-gray-600 mt-6">
                    Already have an account?
                    <a href="/login" className="text-pink-600 font-bold ml-1 hover:underline">
                        Login
                    </a>
                </p>

            </div>

        </div>

        <Footer/>

        </>
    )
}

export default Register;