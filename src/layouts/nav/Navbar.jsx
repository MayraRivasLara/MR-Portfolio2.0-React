import React from 'react'
import { Link } from 'react-router-dom';
import '../nav/Navbar.css'

export default function Navbar() {

  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact Me",
      link: "/contact",
    },
  ];

  return (
    <div className = 'nav'>

      

      <ul className = 'list'>
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