import React from 'react';
import '../home/home.css';
import Me from '../../assets/MeBW.jpg';

export default function Home() {
  return (
    
    <div className='home'>
      <div className='home-left'>
        <div className="home-left-wrapper">
          <h2 className='home-greet'>Hello, My name is</h2>
          <h1 className='home-name'>Mayra Rivas Lara</h1>
          <div className="home-title">
            <div className="home-title-wrapper">
              <div className="home-title-item">Full-Stack Web Developer</div>
              <div className="home-title-item">UI/UX Designer</div>
              <div className="home-title-item">Photographer</div>
              <div className="home-title-item">Writer</div>
              <div className="home-title-item">Contents Creator</div>
              <div className="home-title-item">Mother</div>
            </div>
          </div>
          <p className="home-description">
          I am a student at UWA to become a Full-Stack Web Developer.
          I am passionate about helping people to achieve their goals and I have found in web development the
          tools to continue doing that.
          </p>
          
        </div>
        <div className='home-right'>
          <div className='home-bg'></div>
          <img src= { Me } alt='' className='me-img'/>
        </div>
      </div>
    </div>
          
  )
  }