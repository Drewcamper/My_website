import emailjs from "emailjs-com";
import React from 'react';
import {useState} from 'react';

import '../styling/contact.css'

export default function ContactMe() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_pohvodv', 'template_t8aoj8e', e.target, 'uyknzUYEbp_nj_YhI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
   
    const initialText = 'Send Message';
  const [buttonText, setButtonText] = useState(initialText);

  function handleClick() {
    setButtonText('Message Sent, thank you');
    alert('The email has been sent. Check your inbox.')

    setTimeout(() => {
      setButtonText(initialText);
    }, 2000); //change text back after 3 second
  }
    

    return(
        <div id='Contact_Me' className="container">
            <div className="contact">
            <form onSubmit={sendEmail}>
                    <div className='contact_text'>Hire me!</div>
                    <a className='email' href='mailto:korosiandris@gmail.com'>korosiandris@gmail.com</a>
                    <div className="input-fields">
                        <div className="name-field">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="email-field">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="subject-field">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="message-field">
                            <textarea className="message-form" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="send-button">
                            <button className="btn btn-info" onClick={handleClick}>{buttonText}</button>
                        </div>
                        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>{/* I don't think I need this line*/}
                    </div>
                </form>
            </div>
        </div>
    )
}