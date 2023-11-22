import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import{FcGoogle} from "react-icons/fc"

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

    console.log("ye rha mera form type");
    console.log(formtype)
  return (
    <div className='flex h-[100vh] w-11/12 max-w-[1560px] py-14 justify-evenly gap-x-3 gap-y-0 bg-black text-white   '>

        <div className='flex flex-col w-full max-w-[450px] '>
            <h1 className='font-bold text-3xl my-8'>{title}</h1>
            <p className='flex flex-col'>
                <span className='text-slate-300'>{desc1}</span>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex justify-center gap-4 w-full' >
                <div className='h-[1px] w-[50%] bg-slate-300 mt-3 ' ></div>
                <p>OR</p>
                <div className='h-[1px] w-[50%] bg-slate-300 mt-3'></div>
            </div>

            <button className='w-full flex justify-center item-center font-medium text-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6 rounded-[8px]
           border border-richblack-700'>
                <FcGoogle></FcGoogle>
                <p>Sign Up with Google</p>
            </button>

        </div>

        <div className= 'relative w-11/12 max-w-[300px]'>
            <img src={frameImage}
                alt="Pattern"
                width={320}
                height={300}
                loading="lazy"
                

    
                />

            <img src={image}
                alt="Students"
                width={300}
                height={300}
                loading="lazy"
                className='absolute -top-4 right-3'
                
                />    
        </div>

    </div>
  )
}

export default Template
