import React from 'react';
import Navbar from './nav/Navbar';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainLayout(props) {
  return (
    
    <div>
        {/* nav */}
        <Navbar/>

        {props.children}


        {/* footer */}


    </div>

    
  )
}
