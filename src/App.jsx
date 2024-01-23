import React from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import Silver from './Components/SilvertrackLOGO-1.png'


import {AnimatePresence } from "framer-motion";
import LocationProvider from './LocationProvider';
import RoutesWithAnimation from './RoutesWithAnimation';
import Home from './Components/Home';

function App() {
  

  return (
    
      <>
      <AnimatePresence>
        <div>
          <Navbar logo={Silver}/>
          
          <div className=''>
            <LocationProvider>
            <RoutesWithAnimation />
            </LocationProvider>
          </div>
        
        </div>
      </AnimatePresence>
      </>
   
   
  )
}

export default App
