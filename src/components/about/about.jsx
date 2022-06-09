import React from 'react'
import '../about/about.css';
import Pic from '../../assets/aboutMe-Img.jpeg';
import Award from '../../assets/Logo2.png'

export default function About() {
  return (
      <div className='about'>
        <div className='container'>
          <div className="row align-items-center my-5">

            <div className="col-lg-6">
              <div>
                <img 
                src= { Pic } 
                alt="hobbies-pictures" 
                className='about-image' 
                />
              </div>
            </div>


            <div className='pt-4 col-lg-6 align-items-center my-4'>
              <h5 className='about-title'>I am a Full-Stack Web Developer</h5>
                <br></br>
              <p>
                Hi there! My Name is Mayra. I live in Perth, WA.
              </p>
              <p> 
                I recently graduated from UWA Coding Bootcamp and I can't wait to use all the skills and knowledge I have learnt form the course to bring your ideas to life!
              </p>
              <p>
                I am self motivated, enthusiastic and passionate about learning and helping others to achieve their goals. 
                I enjoy working in a team environment and finding creative ways to solve problems.
              </p>
                             
            </div>
          </div>
        </div>
   
      </div>
  )
}
