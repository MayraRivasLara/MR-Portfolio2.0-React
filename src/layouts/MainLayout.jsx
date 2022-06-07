import React from 'react';
import Navbar from './nav/Navbar';
import Footer from './footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainLayout(props) {
  return (
    
    <div>
       <Navbar/>
       {props.children}
       <Footer/>


    </div>

    
  )
}
