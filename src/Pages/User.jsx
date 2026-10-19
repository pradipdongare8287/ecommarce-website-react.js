import Header from "../Main/Header";
import Footer from "../Main/Footer";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import pradipimg from './../assets/Picsart_26-09-04_15-08-06-896 (2).jpg'
function User(){

    const [user , setuser] = useState({})

    useEffect(()=>{
        var objec = {
            'token':localStorage.getItem('token')
        }
        axios.post('https://a2zithub.org/dairy/abi/user_profile',objec).then((res)=>{
            // console.log(res.data.data[0])
            setuser(res.data.data[0])
        })
    },[])


    var navigation = useNavigate()

    function logout(){
        localStorage.clear('token')
        navigation('/login')
    }
    
    return(
        <>
        <Header/>
            
    

<div class="max-w-3xl mx-auto my-10 p-6 md:p-8 bg-white shadow-xl rounded-2xl border border-gray-200">

   
    <h2 class="text-2xl font-bold text-gray-800 text-center mb-8">
        User Information
    </h2>

    <div class="flex flex-col items-center mb-8">
        <img
            src={pradipimg}
            alt="User Profile"
            class="w-28 h-28 rounded-full object-cover border-4 border-blue-100 shadow"
        />
        <h3 class="text-xl font-semibold text-gray-800 mt-3">
                {user.user_name}
        </h3>
        <p class="text-sm text-gray-500">User Profile Details</p>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                Full Name
            </label>
            <div class="p-3 bg-gray-50 border rounded-lg text-gray-800">
                {user.user_name}
            </div>
        </div>

        <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                Username
            </label>
            <div class="p-3 bg-gray-50 border rounded-lg text-gray-800">
                {user.user_name}
                
            </div>
        </div>

        <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                Email Address
            </label>
            <div class="p-3 bg-gray-50 border rounded-lg text-gray-800 break-words">
                {user.user_email}
            </div>
        </div>

        <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                Mobile Number
            </label>
            <div class="p-3 bg-gray-50 border rounded-lg text-gray-800">
                {user.user_mobile}
            </div>
        </div>

        <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                Password
            </label>
            <div class="p-3 bg-gray-50 border rounded-lg text-gray-800">
                {user.user_password}
            </div>
        </div>

        <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                Date of Birth
            </label>
            <div class="p-3 bg-gray-50 border rounded-lg text-gray-800">
                15-08-2005
            </div>
        </div>

        <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                Gender
            </label>
            <div class="p-3 bg-gray-50 border rounded-lg text-gray-800">
                Male
            </div>
        </div>

        <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                Role
            </label>
            <div class="p-3 bg-gray-50 border rounded-lg text-gray-800">
                User
            </div>
        </div>

        <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                City
            </label>
            <div class="p-3 bg-gray-50 border rounded-lg text-gray-800">
                Jamkhed
            </div>
        </div>

        <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                State
            </label>
            <div class="p-3 bg-gray-50 border rounded-lg text-gray-800">
                Maharashtra
            </div>
        </div>

        <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                UserID
            </label>
            <div class="p-3 bg-gray-50 border rounded-lg text-gray-800">
               {user.user_tbl_id}
            </div>
        </div>

        <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                Account Status
            </label>
            <div class="p-3 bg-green-50 border border-green-200 rounded-lg">
                <span class="text-green-700 font-semibold">
                    Active
                </span>
            </div>
        </div>

        <div class="md:col-span-2">
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                User Token
            </label>
            <div class="p-3 bg-gray-50 border rounded-lg text-gray-800">
                {user.token}
            </div>
        </div>

        <div class="md:col-span-2">
            <label class="block text-sm font-semibold text-gray-600 mb-2">
                About User
            </label>
            <div class="p-3 bg-gray-50 border rounded-lg text-gray-800">
                This user profile contains personal and account information.
            </div>
        </div>

    </div>

   
    <div class="flex flex-wrap justify-center gap-3 mt-8">
        <Link to={'/'}><button
            type="/"
            onclick="history.back()"
            class="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2.5 rounded-lg transition">
            Back
        </button></Link>

        <Link
            to={"/edit_user"}
            class="bg-blue-600 hover:bg-[#ce1b6d] text-white px-6 py-2.5 rounded-lg transition">
            Edit Profile
        </Link>

        <Link
            onClick={logout}
            class="bg-[#ce1b6d] hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition">
            Logout
        </Link>
    </div>

</div>


        <Footer/>
        </>
    )
}
export default User;