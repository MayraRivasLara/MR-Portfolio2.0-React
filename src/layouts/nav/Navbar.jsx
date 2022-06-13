import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../nav/Navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contact Me",
      link: "/contact",
    },
  ];

  
  const [isMobile, setIsMobile] = useState(false);
  const [showItems, setShowItems] = useState(true);
  
  useEffect(() => {
    const screenWidth = document.body.clientWidth;

    const screenIsMobile = screenWidth < 550;

    setIsMobile(screenIsMobile);
    if(screenIsMobile) {
      setShowItems(false);
    }
  }, [])
  
  function toggleList() {
    setShowItems(!showItems);
  }
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light ">
      <h1 className='navname'>Mayra Rivas Lara</h1>
      {isMobile && (
        <button onClick={toggleList} aria-label="Toggle navigation" className="navbar-toggler" type="button">
          <span className='navbar-toggler-icon'></span>
        </button>
      )}
      {showItems && (
        <ul className='navbar-nav mt-md-0'>
        {navItems.map((item) => {
          return (
            <li className = 'list-item' key={item.link}>
              <Link className="navList nav-link" to={item.link}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
      )}
    </nav>
  )
}



              
      