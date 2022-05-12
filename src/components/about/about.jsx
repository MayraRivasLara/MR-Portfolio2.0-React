import React from 'react'
import '../about/about.css';
import Pic from '../../assets/ToastBW.jpg';
import Award from '../../assets/Logo2.png'

export default function About() {
  return (
    <div className='about'>
      <div className='about-left'>
       <div className="about-card bg">
         <div className="about-card">
           <img src= { Pic } alt="tulips" className='about-image' />
         </div>
       </div>
      </div>
      <div className='about-right'>
        <h1 className='about-title'>About Me</h1>
        <p className='about-subtitle'>
          Un día ¡primero Dios!has de quererme un poquito. Yo levantaré el ranchito en que vivamos los dos.
          ¿Que más pedir? Con tu amor, mi rancho, un árbol, un perro, y enfrente el cielo y el cerro y el cafetalito en flor...
          Y entre aroma de saúcos, un zenzontle que cantará y una poza que copiará pajaritos y bejucos.
        </p>
        <p className='about-description'>
          Lo que los pobres queremos, lo que los pobres amamos, eso que tanto adoramos porque es lo que no tenemos... 
          Con sólo eso, vida mía; con sólo eso: con mi verso, con tu beso, lo demás nos sobraría...
          Porque no hay nada mejor que un monte, un rancho, un lucero, cuando se tiene un "Te quiero" y huele a sendas en flor...
        </p>
        <div className="about-award">
          <img src= { Award } alt="trees" className="a-award-img" />
          <div className='about-award-txt'>
            <h4 className='about-award-title'>International Design Award</h4>
            <p>
              Es porque un pajarito de la montaña ha hecho, en el hueco de un árbol, su nido matinal, que el árbol amanece con música en el pecho, como que si tuviera corazón musical.
              Si el dulce pajarito por entre el hueco asoma, para beber rocío, para beber aroma, el árbol de la sierra me da la sensación de que se le ha salido, cantando, el corazón.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  )
}
