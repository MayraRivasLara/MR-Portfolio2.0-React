import React from 'react';
import '../projects/projects.css';
import '../../assets';



export default function Projects({img, link, title}) {
  return (
    <div className='project-card'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

      <a href={link} target="_blank" rel='noreferrer'>
        <img src={img} alt="" className="project-image" />
      </a>

    </div>
  )
}
