import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_byki766', 'template_za1yotd', form.current, 'Jmu5sQ1qVc0YFjoXu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id="#contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className='contact-icon'/>
            <h4>Email</h4>
            <h5>yujiagu1010@gmail.com</h5>
            <a href="mailto:yujiagu1010@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className='contact-icon'/>
            <h4>WhatsApp</h4>
            <h5>Yujia</h5>
            <a href="https://api.whatsapp.com/send?phone=+61420895390">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
