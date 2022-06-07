import React from 'react'
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

  return (
    
    <div className='navbar'>
              
      <ul>
        {navItems.map((item) => {
          return (
            <li className = 'list-item'>
              <Link to={item.link} >{item.title}</Link>
            </li>

          )

        })}
      </ul>
      
    </div>
  )
}