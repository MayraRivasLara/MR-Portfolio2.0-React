import React, { useRef, useState } from 'react';
import '../contact/contact-me.css';
import Cv from '../contact/MR-CV2022.pdf';
import { FaFilePdf, FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import emailjs from '@emailjs/browser';

function ContactMe(e) {
  const form = useRef();
  const [ sent, msgSent ] = useState(false);

  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bmojxta', 'template_dtyba8j', form.current, 'JivYjR6rR-Xh6Rb5z')
        .then((result) => {
            console.log(result.text);
            msgSent(true);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  
  return(
    <div className='contact-page'>
      <div className="container">
          <h1 className='contact-title'> Contact Me </h1>
          <p className='email'> Email: mayrulara@gmail.com </p>
          <p className='phone'> Phone: 0426 768 830</p>
          <p className='icons'>
            <a href={Cv} download><FaFilePdf id='cv' size='3.2rem' color='#313233'/></a>
            <a href='https://github.com/MayraRivasLara'><FaGithub id='git' size='3.2rem' color='#313233'/></a>
            <a href='https://www.linkedin.com/in/mayra-rivas-lara-696032226/'><SiLinkedin id='linkedIn' size='3.2rem' color='#313233' /></a>
          </p>



          <form ref={form} onSubmit={sendEmail}>
            
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <input type='text' className='form-control' placeholder='Name' name='from_name' autoFocus style={{height:'40px'}} required/>
              </div>
                       
            
              <div className='col-md-6 mb-3'>
                <input type='email' className='form-control' placeholder='Email Address' name='from_email' 
                style={{
                  height:'40px'
                  }} 
                  required/>
              </div>
            </div>
            
            
            <textarea type='text' className='form-control' id='message' rows='8' placeholder='Your message' name='message' 
              style={{
              padding: "10px"
              }} 
              required >  
            </textarea>
            
            
            <div className='row'>
              <div className='col-xs-12 col-md-12 form-group'> 
                <button className='btn-lg rounded-3' type='submit'>Send</button>
                  <p className='response'>
                    {sent && 'Thank you for your email, I will get back to you as soon as I can!'}
                  </p>
              </div>
            </div>

          </form>
      </div>
    </div>
      
      
  )
}

export default ContactMe;
