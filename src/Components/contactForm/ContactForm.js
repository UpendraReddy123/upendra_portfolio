import React, { useState } from 'react';
import "./ContactForm.css";


const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };


  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id='contact'>
      <div className="container" id='contactCnt'>
      {/* <h5 style={{ fontWeight: "bold" }}>CONTACT</h5> */}
        <form action="https://formsubmit.co/6b2b9ef08306ba2cdb6c7fa4e0eab751" method="POST" target='_blank'>
          <div className="form-group" id='myform'>
          <h2 style={{ fontWeight: "bold", fontStyle:"italic" }}>CONTACT</h2>
            <input type="text" id="contactTxt" placeholder='Name:' name="name" value={name} onChange={handleNameChange} required />
          </div>
          <div className="form-group">
            <input type="email" id="contactTxt"  placeholder='Email:' name="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="form-group">
            <textarea id="contactTxt" name="message" placeholder='Message:' rows="4" value={message} onChange={handleMessageChange} required></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Send</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>
        
        
      </div>
    </div>
  );
};

export default ContactForm;
