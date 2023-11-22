import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly gap-x w-11/12 items-center py-4 bg-black text-white '>

        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy" className='my-5'/>
        </Link>

        <nav>
            <ul className='flex gap-3 '>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex ml-5 mr-3 gap-3 my-5'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-700 py-2 px-2 rounded-md' >
                        Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-richblack-700 py-2 px-2 rounded-md' >
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }} className='bg-richblack-700 py-2 px-2 rounded-md'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-700 py-2 px-2 rounded-md'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
