
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm()
{
  
    const[accounttype,setaccounttype]=useState("student");
    const NavLink=useNavigate();
    const[signupdata,setsignupdata]=useState({
        email:"",
        password:"",
        confirmpassword:"",
        firstname:"",
        lastname:"",
        
    })
   
    function changehandler(event)
    {
        setsignupdata((prev)=>(
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        )
            
        )
    }
    function submithandler(event)
    {
        event.preventDefault();
        if(signupdata.confirmpassword!==signupdata.password)
        {
            toast.error("password not match");
            return;
        }
        NavLink("./dashboard")
        toast.success("account created");
    }
    
    
    const[showPassword, setShowPassword] = useState(false);
    const[showPassword1,setShowPassword1]=useState(true);
    return(
        
            <div className="w-full" > 
                <div className="flex gap-4 bg-richblack-800 p-1 gap-x-1 my-4 rounded-full max-w-max" >
                    
                        <button
                        className={`${accounttype==="student"? "bg-richblack-900 text-white rounded-full transition-all py-2 px-3":"bg-transparent text-richblack-900" }`} 
                        onClick={()=>setaccounttype("student")}>Students</button>
                        <button
                        className={`${accounttype==="instructor"? "bg-richblack-900 text-white rounded-full transition-all py-2 px-3":"bg-transparent text-richblack-900" }`}
                        onClick={()=>setaccounttype("instructor")}>Instructor</button>
                    
                    
                </div>
                <form onSubmit={submithandler}>
                    {/* firstname and lastname */}
                        <div className="flex">
                        <label className="mt-1">
                            <p>First name<sup className='text-red-600'>*</sup></p>

                            <input 
                            name="firstname"
                            type="text"
                             value={signupdata.firstname}
                            placeholder="first name"
                            onChange={changehandler}
                            className="focus:outline-none w-full px-2 py-1 rounded-md bg-richblack-700">
                        
                            </input>

                            <p>Last name<sup className='text-red-600'>*</sup></p>
                            <input 
                            name="lastname"
                            type="text"
                            value={signupdata.lastname}
                            placeholder="last name"
                            onChange={changehandler}
                            className="focus:outline-none w-full px-2 py-1  rounded-md bg-richblack-700"></input>

                        </label>
                        </div>
                        {/* email add */}
                        <label>
                            <p className="mt-2">Email Address<sup className='text-red-600'>*</sup></p>

                        <input 
                            type="email"
                            name="email"
                            value={signupdata.email}
                            placeholder="email id"
                            onChange={changehandler}
                            className="focus:outline-none w-full px-2 py-1  rounded-md bg-richblack-700">

                        </input>
                        </label>
                        {/* password and confirm password */}
                    

                        <div className="flex gap-5">
                        <label className="relative">
                            <p className="mt-2">Password<sup className='text-red-600'>*</sup></p>
                            <input
                                 name="password"
                                 type={showPassword?("text"):("password")}
                                 value={signupdata.password}
                                 onChange={changehandler}
                                 placeholder="Password"
                                 className="focus:outline-none w-full px-2 py-1 rounded-md bg-richblack-700">
                    
                             </input>
                            <span onClick={()=>setShowPassword((prev)=>!prev)} className='absolute -right-[-5px] top-[33px] cursor-pointer'>
                                {
                                    showPassword?(<AiOutlineEyeInvisible></AiOutlineEyeInvisible>):(<AiOutlineEye></AiOutlineEye>)
                                }
                            </span>
                        </label>
                        <label className="relative">
                            <p className="mt-2">Confirm password<sup className='text-red-600'>*</sup></p>

                            <input
                            name="confirmpassword"
                            type={showPassword1?("text"):("password")}
                            value={signupdata.confirmpassword}
                            onChange={changehandler}
                            placeholder="confirm password"
                            className="focus:outline-none w-full px-2 py-1 rounded-md bg-richblack-700">

                            </input>
                    
                        
                        <span onClick={()=>setShowPassword1((prev1)=>!prev1)} className='absolute -right-[-5px] top-[33px] cursor-pointer'>
                             {
                                 showPassword1?(<AiOutlineEyeInvisible></AiOutlineEyeInvisible>):(<AiOutlineEye></AiOutlineEye>)
                             }
                            </span>
                        </label>
                        </div>
                        
                        <div>
                            <button className='bg-yellow-500 py-2 px-3 w-full mt-4 rounded-md'>Signup</button>
                        </div>

                    </form>
        </div>
           
           
           
        
    )
} 

export default SignupForm