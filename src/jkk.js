import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const hh='deva deekshith';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0z6zxhj', 'template_75zatfd', form.current, 'j8-b2aI-DjlYqsajs')
      .then((result) => {
        alert('form submitted');
        window.location.reload(false);
      }, (error) => {
          console.log(error.text);
      });

      
  };

  return (
    <div>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    <h1>wait for 30 secs after sumbitting the form </h1>
    </div>
  );
};


export default ContactUs;