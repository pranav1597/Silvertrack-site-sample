
import './App.css'
import Navbar from './Components/Navbar'
import Silver from './Components/SilvertrackLOGO-1.png'
import {HashRouter as Router, Routes, Route} from "react-router-dom";

import {AnimatePresence } from "framer-motion";
import LocationProvider from './LocationProvider';
import RoutesWithAnimation from './RoutesWithAnimation';

function App() {
  

  return (
    <Router>
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
    </Router>
  )
}

export default App
