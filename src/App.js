
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
import Loader from './features/components/Loader';
import Footer from './components/Footer';
import AnimatedRoutes from './features/components/AnimatedRoutes';

function App() {
  return (
      <Router>
       <AnimatedRoutes/>
      </Router>
      
  
  );
}

export default App;
