import React from 'react';
import '../home/home.css';
import Photo from '../../assets/ph1.jpg';

export default function Home() {
  return (
    
    <div className='home'>
       <div className='container'>
        <div className="row align-items-center my-5">
          
          <div className='col-lg-6'>
            <div className="photo-bg">
            <img class="shadow-lg rounded-circle"
            src={Photo}
            id= 'home-photo'
            alt='homephoto'
            />
            </div>
          </div>
          
          <div className='col-lg-6'>
          <h2 className='home-greet'>Welcome to my portfolio!
          <br></br>Hi, My name is</h2>
          <h1 className='home-name'>Mayra Rivas Lara</h1>
          <p className="home-description">
          Junior Full-Stack Web Developer.
          </p>
          </div>
         
      <p  className='quote text-center'>“Everything you can imagine is real.” <br></br>— P. Picasso</p>
        </div> 
      </div> 
    </div>
)}