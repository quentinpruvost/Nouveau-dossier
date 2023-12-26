import React from 'react';
// HashRouter pour le serveur de gitHub
import { HashRouter as Router, Routes, Route, } from 'react-router-dom';

// Importe les composants Pages
import Projets from './Pages/Projects/projets';
import Home from './Pages/Home/home';
import Contact from './Pages/Contact/contact';


function Rooter(){
  return(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/projets' element={<Projets />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path='/cv' />
        </Routes>
      </Router>
    </React.StrictMode>
  )
} 

export default Rooter