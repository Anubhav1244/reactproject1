import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler} className='w-full gap-y-4 mt-4'>
        <label>
            <p className='font-semibold'>
                Email Address <sup className='text-red-600'>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"
                className='focus:outline-none w-full px-2 py-1 rounded-md bg-richblack-700 '
            />
        </label>

        <label className='flex flex-col mt-3 relative'>
            <p className='font-semibold'>
                Password <sup className='text-red-600'>*</sup>
            </p>
            
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='focus:outline-none w-full px-2 py-1 rounded-md bg-richblack-700  '
            />

            <span onClick={() => setShowPassword((prev) => !prev)} className='absolute -right-[-5px] top-[31px] cursor-pointer'>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>

           
            
            <Link to="#">
                <p className='max-w-max ml-auto top-[40px] w-full text-xs mt-1 text-blue-600'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='bg-yellow-500 py-2 px-3 w-full mt-2 rounded-md'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm
