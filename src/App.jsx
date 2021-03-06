import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import ContactMe from './components/contact/contact-me';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (

    <HashRouter>

      <MainLayout>

        <Routes>

          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/projects" element={ <Projects/> } />
          <Route path="/contact"element={ <ContactMe/> } />

        </Routes>

      </MainLayout>

    
    </HashRouter>
  );
}

export default App;


