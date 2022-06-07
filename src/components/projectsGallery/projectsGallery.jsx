import React from 'react';
import Projects from '../projects/projects';
import './projectsGallery.css';


export default function ProjectsGallery() {
  return (
    <div className='project-list'>
      <div className="project-list-texts">
        <h1 className="project-list-title">El Arbol de Fuego </h1>
          <p className="p-description">
            Son tan vivos los rubores de tus flores, raro amigo, que yo a tus flores les digo: "Corazones hechos flores".
            Y a pensar a veces llego: Si este árbol labios se hiciera... ¡ah, cuánto beso naciera de tantos labios de fuego...!
            Amigo: qué lindos trajes te ha regalado el Señor; te prefirió con su amor vistiendo de celajes...
            Qué bueno el cielo contigo, árbol de la tierra mía... Con el alma te bendigo, porque me das tu poesía...
            Bajo un jardín de celajes, al verte estuve creyendo que ya el sol se estaba hundiendo adentro de tus ramajes.
          </p>
       
      </div>
      <div className="pl-list">
        {Projects.map((item) => (

          <Projects key={item.id} img= {item.img} link={item.link}/>

        
        ))}
        
      </div>
    </div>
  )
}