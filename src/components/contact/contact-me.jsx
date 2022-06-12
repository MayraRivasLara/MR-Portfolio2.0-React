import React, { useRef, useState } from 'react';
import '../contact/contact-me.css';
import Form from 'react-bootstrap/Form';
// import Cv from '../contact/MR-CV2022.pdf';
import emailjs from '@emailjs/browser';

function ContactMe(e){
  const form = useRef();
  const [ msgToSend, setMsgSent ] = useState(false);
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this);
  }
  return(
    <div className='contact-page'>
      <div className="container">
          <h1 className='contact-title'> Contact Me </h1>
          <p className='email'> Email: mayrulara@gmail.com </p>
          <p className='phone'> Phone: 0426 768 830</p>
          
          <form onSubmit={ContactMe}>
            <div className='col-8 from-group mx-auto'>
              <input type='text' className='form-control' placeholder='Name' name='name'/>
            </div>
            <div className='col-8 from-group pt-2 mx-auto'>
              <input type='email' className='form-control' placeholder='Email Address' name='email'/>
            </div>
            <div className='col-8 from-group pt-2 mx-auto'>
              <textarea type='text' className='form-control' id='message' cols='30' rows='8' placeholder='Your message' name='message'></textarea>
            </div>
            <div className='row'>
              <div className='col-xs-12 col-md-12 form-group'>
                <button className="btn-lg btn-block rounded-2" type="submit">Send</button>
                {/* {sent && "Thank you for your email, I wil get back to you as soon as I can!"} */}
              </div>
            </div>
         </form>
      </div>
    </div>
      
      
  )
}

export default ContactMe;

// export default function ContactMe() {
//   return (
//     <div>Contact Me
//         links to github
//         email
//         linkedIn
//     </div>
//   )
// }