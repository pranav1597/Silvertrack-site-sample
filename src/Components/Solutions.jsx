import React from "react";
import {motion} from 'framer-motion'



export default function Solutions(props) {
    return (
        <motion.div 
        variants={props.routeVariants} 
        initial="initial"
        animate="final">
            <motion.h1
             variants={props.childVariants} 
             initial="initial"
             animate="final"
             className="font-bold">Solutions</motion.h1>
        </motion.div>
    )
}