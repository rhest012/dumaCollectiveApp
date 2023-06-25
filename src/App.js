
import './App.css';
import Nav from './components/Nav';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor';

// Pages and components
import Jff from './features/theGrind/pages/Jff';
import Squad from './features/pages/Squad';
import NewsRoom from './features/theNewsRoom/pages/NewsRoom';
import TheGrind from './features/theGrind/pages/TheGrind'
import Home from './features/pages/Home'
import WhatWeDo from './features/pages/WhatWeDo';
import Contact from './features/pages/Contact';
import SingleService from './features/pages/SingleService';
import Loader from './features/pages/Loader';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Nav />
        <CustomCursor />
        <Routes>
          <Route path="/"element = {<Home/>}/>
          <Route path="/what-we-do"element = {<WhatWeDo/>}/>
          <Route path="/loader"element = {<Loader/>}/>
            <Route path="/what-we-do/:id" element = {<SingleService/>}/>
          <Route path="/the-squad" element = {<Squad/>}/>
          <Route path="/the-grind" element = {<TheGrind/>}/>
            <Route path="/the-grind/jff" element = {<Jff/>}/>
          <Route path="/the-buzz" element = {<NewsRoom/>}/>
          <Route path="/get-in-touch" element= {<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
      
  
  );
}

export default App;
