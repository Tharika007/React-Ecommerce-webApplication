import React from "react";
import "./Contact.css";
import Footer from '../Footer/Footer.jsx';

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585962832!2d79.78616421291653!3d6.9220039467265995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1674539913123!5m2!1sen!2slk';
  return (
    <>
      <section className='contactbackground'>
        <div className='container flexls'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <p>We're open for any suggestion or just to have a chat</p>

            <form action=''>
              <div className='flexls'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='5'>
                Type a message here...
              </textarea>
              <button className='sendmsg'>SEND MESSAGE</button>
            </form>

            <div className='items grid2'>
              <div className='box'>
                <p>ADDRESS: No.76 st francis church, california</p>
              </div>
              <div className='box'>
                <p>EMAIL: lobbzy@gmail.com</p>
              </div>
              <div className='box'>
                <p>PHONE: 011 2 952 507</p>
              </div>
            </div>

        
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Contact;
