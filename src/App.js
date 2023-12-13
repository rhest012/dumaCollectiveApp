
import './App.css';
import Nav from './components/Nav';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AnimatedRoutes from './features/components/AnimatedRoutes';
import { getApp } from './helpers/RouterHelper';


function App() {
  const AnimatedRoutes = getApp()
  
  return (
      <Router>
      
       <AnimatedRoutes/>
      </Router>
      
  
  );
}

export default App;
