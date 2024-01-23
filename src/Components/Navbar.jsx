import React from "react";
import { Link } from "react-router-dom";
// import Home from "./Home";

export default function Navbar(props){
    return (
        <div className="navbar flex justify-between items-center px-5 shadow-xl ">
             <div className="container flex justify-start items-center text-yellow-300">
                <Link to='/'>
                           <img src={props.logo} className="logo" alt="Vite logo" />
                         </Link>

             </div>
             <div className="container flex justify-around items-center  text-green-400"> 
                <Link to ='/' className='home-link text-lg font-bold text-blue-400'>Home</Link>
                <Link to ='/solutions' className='text-lg font-bold text-blue-400'>Solutions</Link>
                <Link to ='/about' className='text-lg font-bold text-blue-400'>About</Link>
                <Link to ='/contact' className='text-lg font-bold text-blue-400'>Contact Us</Link>
               
            </div>

        </div>
    )
}