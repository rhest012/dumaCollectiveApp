import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Router } from 'react-router-dom';

// Pages 
import Home from '../pages/Home';
import WhatWeDo from '../pages/WhatWeDo';
import Loader from './Loader';
import Squad from '../pages/Squad';
import TheGrind from '../theGrind/pages/TheGrind';
import Jff from '../theGrind/pages/Jff';
import NewsRoom from '../theNewsRoom/pages/NewsRoom';
import Contact from '../pages/Contact';

// Components
import Nav from '../../components/Nav';
import CustomCursor from '../../components/CustomCursor';
import Footer from '../../components/Footer';

import { motion, AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loading
          ? document.querySelector("body").classList.add("loading")
          : document.querySelector("body").classList.remove("loading");
      }, [loading]);

  return (
    <>
        
        <AnimatePresence>
        {loading ? (
        <motion.div key="loader" layoutId="page-transitions">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
            <Nav />
            <CustomCursor />
            <Routes>
            <Route path="/"element = {<Home/>}/>
            <Route path="/what-we-do"element = {<WhatWeDo/>}/>
            <Route path="/the-squad" element = {<Squad/>}/>
            <Route path="/the-grind" element = {<TheGrind/>}/>
                <Route path="/the-grind/jff" element = {<Jff/>}/>
            <Route path="/the-buzz" element = {<NewsRoom/>}/>
            <Route path="/get-in-touch" element= {<Contact/>}/>
            </Routes>
            <Footer/>
        </>
      )}
        </AnimatePresence>
        
    </>
  
  )
}

export default AnimatedRoutes