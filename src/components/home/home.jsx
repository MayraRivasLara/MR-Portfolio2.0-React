import React from 'react';
import '../home/home.css';
import Photo from '../../assets/ph1.jpg';

export default function Home() {
  return (
    
    <div className='home'>
      <div className='container'>
        <div className="row align-items-center my-5">
          <div className='col-lg-6'>
            <img 
            src={Photo}
            id= 'home-photo'
            alt='homephoto'
            />
          <h2 className='home-greet'>Hello, My name is</h2>
          <h1 className='home-name'>Mayra Rivas Lara</h1>
          <div className="home-title">


            <div className="home-title-wrapper">
              <div className="home-title-item">Junior Full-Stack Web Developer</div>
              <div className="home-title-item">UI/UX Enthusiast</div>
              <div className="home-title-item">Great Communicator</div>
              <div className="home-title-item">Team Player</div>
              <div className="home-title-item">Creative</div>
              <div className="home-title-item">Self-Motivated</div>
            </div>
          
          
          </div>
          <p className="home-description">
          I am a student at UWA to become a Full-Stack Web Developer.
          I am passionate about helping people to achieve their goals and I have found in web development the
          tools to continue doing that.
          </p>
          </div>
       </div>
         <div className='home-right'>
          <div className='home-bg'>
          <img src= { Photo } alt='' className='me-img'/>

            <p>Mayra is Awesome</p>
          </div>
      

        </div> 
      </div>
    </div>
          
  )}