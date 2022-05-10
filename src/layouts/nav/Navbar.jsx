import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Project",
      link: "/project",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "ContactMe",
      link: "/contact",
    },
  ];

  return (
    <div >

      

      <ul>
        {navItems.map((item) => {
          return (
            <li>
              <Link to={item.link} >{item.title}</Link>
            </li>

          )

        })}
      </ul>

    </div>
  )
}