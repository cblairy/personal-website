import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import devImg from "../../images/devCode.jpg";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oiqqnkg', 'template_7r5mjvd', form.current, 'XTNnKUipNyvIO4LZB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <img src={devImg} alt="page contenant du code" />
        <div className='inputs'>
            <label></label>
            <input required className='inputText' type="text" name="user_name" placeholder='Nom ou entreprise' />
            
            <label></label>
            <input required className='inputText' type="email" name="user_email" placeholder='Email'/>
            
            <label></label>
            <input required className='inputText' type="text" name="message" placeholder='Message'/>
            
            
            <div className="sendingButton" >
                <button className="cta" type='submit'>
                    <span>ENVOYER</span>
                    <span>
                        <svg width="46px" height="43px" version="1.1" viewBox="0 0 66 43" >
                        <g fill="#fff" fillRule="evenodd">
                        <path className="one" d="m40.154 3.8949 3.8219-3.7556c0.19452-0.19114 0.50632-0.19115 0.70085-3.3803e-5l21.014 20.646c0.39397 0.38705 0.39957 1.0202 0.012522 1.4142-0.0041162 0.0041898-0.0082693 0.0083433-0.012459 0.01246l-21.015 20.649c-0.1945 0.19112-0.50627 0.19115-0.70081 6.72e-5l-3.8218-3.7539c-0.197-0.19351-0.19984-0.51008-0.0063341-0.70708 0.0021048-0.0021427 0.0042287-0.0042665 0.0063717-0.006371l16.839-16.537c0.19702-0.19348 0.19989-0.51005 0.0064087-0.70708-0.0021229-0.0021617-0.0042653-0.004304-0.0064271-0.0064268l-16.839-16.535c-0.19703-0.19347-0.19992-0.51004-0.0064452-0.70708 0.002087-0.0021254 0.004193-0.0042322 0.0063177-0.00632z"/>
                        <path className="two" d="m20.154 3.8949 3.8219-3.7556c0.19452-0.19114 0.50632-0.19115 0.70085-3.3803e-5l21.014 20.646c0.39397 0.38705 0.39957 1.0202 0.012522 1.4142-0.0041162 0.0041898-0.0082693 0.0083433-0.012459 0.01246l-21.015 20.649c-0.1945 0.19112-0.50627 0.19115-0.70081 6.72e-5l-3.8218-3.7539c-0.197-0.19351-0.19984-0.51008-0.0063341-0.70708 0.0021048-0.0021427 0.0042287-0.0042665 0.0063717-0.006371l16.839-16.537c0.19702-0.19348 0.19989-0.51005 0.0064087-0.70708-0.0021229-0.0021617-0.0042653-0.004304-0.0064271-0.0064268l-16.839-16.535c-0.19703-0.19347-0.19992-0.51004-0.0064452-0.70708 0.002087-0.0021254 0.004193-0.0042322 0.0063177-0.00632z"/>
                        <path className="three" d="m0.15439 3.8949 3.8219-3.7556c0.19452-0.19114 0.50632-0.19115 0.70085-3.3803e-5l21.014 20.646c0.39397 0.38705 0.39957 1.0202 0.012522 1.4142-0.0041162 0.0041898-0.0082693 0.0083433-0.012459 0.01246l-21.015 20.649c-0.1945 0.19112-0.50627 0.19115-0.70081 6.72e-5l-3.8218-3.7539c-0.197-0.19351-0.19984-0.51008-0.0063341-0.70708 0.0021047-0.0021427 0.0042287-0.0042665 0.0063717-0.006371l16.839-16.537c0.19702-0.19348 0.19989-0.51005 0.0064087-0.70708-0.0021229-0.0021617-0.0042653-0.004304-0.0064271-0.0064268l-16.839-16.535c-0.19703-0.19347-0.19992-0.51004-0.0064452-0.70708 0.0020871-0.0021254 0.0041931-0.0042322 0.0063178-0.00632z"/>
                        </g>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
        
        
    </form>
  );
};


// <input className='inputSubmit' type="submit" value="Envoyer" />