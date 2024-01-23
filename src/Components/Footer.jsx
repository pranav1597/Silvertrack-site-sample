import React from "react";
import {motion} from 'framer-motion'
import logosmall from './logo-small.png'

export default function Footer(props){
    return (
        
         <div className="footer">
         <motion.div
         variants={props.childVariants}
         initial="initial"
         animate="final"
         className="footer-section flex justify-around items-start py-5 pt-10 text-gray-200">
             <div>
                 <img src={logosmall} alt="silvertrack logo"/>
             </div>
             <div className="footer-contact">
                 <h1 className="text-center  font-body font-bold text-2xl">Contact Info</h1>
                 <div className="contact-info-flex flex flex-col justify-around  font-body font-bold text-gray-500">
                     <div className="flex flex-col justify-around items-center mt-2">
                         <h1>Corporate Office</h1>
                         <p>+91 8022173333 , 22173399</p>
                     </div>
                     <div className="flex flex-col justify-around items-center mt-2">
                         <h1>Customer Care</h1>
                         <p>+91 9342659403</p>
                     </div>
                     <div className="flex flex-col justify-around items-center mt-2">
                         <h1>Sales Helpline</h1>
                         <p> +91 7090112233</p>
                     </div>
                 </div>
             </div>
             <div className="footer-company ">
                 <h1 className="text-center  font-body font-bold text-2xl">Our Company</h1>
                 <div className="contact-info-flex grid grid-cols-2  font-body font-bold text-gray-500 ">
                     <div className="flex flex-col justify-around items-center mt-2 cursor-pointer hover:text-gray-300">
                         <h1>About</h1>
                     </div>
                     <div className="flex flex-col justify-around items-center mt-2 cursor-pointer hover:text-gray-300">
                         <h1>Products</h1>
                     </div>
                     <div className="flex flex-col justify-around items-center mt-2 cursor-pointer hover:text-gray-300">
                         <h1>Clients</h1>
                     </div>
                     <div className="flex flex-col justify-around items-center mt-2 cursor-pointer hover:text-gray-300">
                         <h1>Contact</h1>
                     </div>
                     <div className="flex flex-col justify-around items-center mt-2 cursor-pointer hover:text-gray-300">
                         <h1>Solutions</h1>
                     </div>
                     <div className="flex flex-col justify-around items-center mt-2 cursor-pointer hover:text-gray-300">
                         <h1>Sectors</h1>
                     </div>
                     <div className="flex flex-col justify-around items-center mt-2 cursor-pointer hover:text-gray-300">
                         <h1>Career</h1>
                     </div>
                 </div>
             </div>
         </motion.div>
         <motion.div>
             <p className="font-body font-medium text-lg text-gray-300 text-center py-10">Copyright © 2023 Silvertrack </p>
         </motion.div>
     </div>

    )
}