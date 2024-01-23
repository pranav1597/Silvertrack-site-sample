import { useLocation } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Solutions from './Components/Solutions';


export default function RoutesWithAnimation() {
    const routeVariants = {
        initial: {
          y: "100vh",
        },
        final: {
          y: "0vh",
          transition: {
            type: "spring",
            mass: 0.4,
          },
        },
      };
      
      const childVariants = {
        initial: {
          opacity: 0,
          y: "50px",
        },
        final: {
          opacity: 1,
          y: "0px",
          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        },
      };

    const location = useLocation();
  
    console.log(location)
    return (
        <Routes location={location} key={location.key}>
        <Route exact path='/' element={< Home routeVariants={routeVariants} childVariants={childVariants}/>}></Route>
        <Route exact path='/solutions' element={< Solutions routeVariants={routeVariants} childVariants={childVariants}/>}></Route>
        {/* <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route> */}
      </Routes>
    );
  }