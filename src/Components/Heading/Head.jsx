import React from 'react'
import './Header.css';
import '../../App.css';

function Head() {
  return (
    <>
      <section className='Head'>
        <div className='container flexls'>
          <div className="logos">
            <h1>LOZZBY</h1>
            <span>Online Store</span>
          </div>
          <div className='socialMedia'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head;