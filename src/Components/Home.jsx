import React from "react";
import Homemain from '../homemain.jpg'
import {motion} from 'framer-motion'
import sectorsapi from "../sectorsapi";
import Footer from './Footer'

export default function Home(props){
    const sectors = sectorsapi.map(item =>{

        console.log(item)
        return (
            <div>
                <div className="flex flex-col justify-between items-center mt-5">
                    <img src={item.image} className="shadow-md"/>
                    <h1>{item.title}</h1>
                </div>
            </div>
        )
    })

    return (
        // About Silvertrack section

        <div className="min-h-fit bg-blue-50 ">
            <motion.div
                variants={props.routeVariants}
                initial="initial"
                animate="final"
                className="sts-about container mx-auto flex  justify-between items-center ">

                <motion.div
                    variants={props.routeVariants}
                    initial="initial"
                    animate="final"
                    className="flex flex-1 flex-col justify-around items-start px-5 "
                >
                    <motion.h1
                        variants={props.childVariants}
                        initial="initial"
                        animate="final"
                        className=" font-bold mb-4 mt-10 text-blue-500 text-3xl">About Silver track</motion.h1>

                    <motion.p
                        variants={props.childVariants}
                        initial="initial"
                        animate="final"
                        className="font-medium text-2xl font-body">Silver Track Systems & Services Pvt. Ltd is a specialist in designing and delivering professional solutions in Audio Visual Integration, Unified Communication, Security & Surveillance and IT Networking. Established in 2004, now one of the market leaders, we serve more than 1200+ pleased clients in various verticals across India, such as Corporate, E-commerce, Transport, Telecom, Banks, Media, Retail, Health Care, Hospitality, Education, Government, Manufacturing and Real Estate.</motion.p>

                </motion.div>

                <motion.div
                    variants={props.childVariants}
                    initial="initial"
                    animate="final"
                    className="flex flex-1 shadow-xl">
                    <motion.img
                        variants={props.childVariants}
                        initial="initial"
                        animate="final"
                        src={Homemain} className="homemain-img " alt="Conf Room Solutions" />
                </motion.div>

            </motion.div>
             {/* end of about silvertrack section */}

             {/* start of sectors section */}

             

            <motion.div 
             variants={props.childVariants}
             initial="initial"
             animate="final"
             className="sectors-grid py-10 mt-10"
            >
                <motion.div
                variants={props.childVariants}
                initial="initial"
                animate="final"
                className="text-center"
                >
                    <h1 className="text-2xl font-body font-bold">Sectors</h1>
                </motion.div>
                {/* start of sectors grid section  */}
                <motion.div
                 variants={props.childVariants}
                 initial="initial"
                 animate="final"
                className=" grid grid-cols-4 mx-auto mt-10 font-bold font-body">
                    {sectors}
                </motion.div>
            </motion.div>

          
            <Footer />
           
        </div>
    )
}