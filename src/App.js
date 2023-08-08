
import './App.css';
import Nav from './components/Nav';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor';

import AnimatedRoutes from './features/components/AnimatedRoutes';


function App() {
  return (
      <Router>
      
       <AnimatedRoutes/>
      </Router>
      
  
  );
}

export default App;
