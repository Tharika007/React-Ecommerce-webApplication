import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <section className='footersection'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Stay tune and get the latest update</h1>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>     
            <h1>LOZZBY</h1>
            <span>Best Online Store</span> <br></br>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Products</li>
              <li>Gift Cards</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Produtcs</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                420 church St. sea View, San Francisco, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +94 72 800 16 24
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                lozzby@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='owner'>
        <p>
          Copyright ©2023 All rights reserved | This template made by Tharika
        </p>
      </div>
    </>
  )
}

export default Footer
