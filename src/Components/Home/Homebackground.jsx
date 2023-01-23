import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

function Homebackground() {
  return (
    <>
        <section className='homebackground'>
            <div className='container'>
                <div className="row">
                    <p>Best shopping opportunities</p>
                    <p>Choose, Purchase, Enjoy!</p>
                    <div className="buttons">
                        <button className="primarybtn"> 
                            Buy Now <i className='fa fa-long-arrow-alt-right'></i>    
                        </button>
                        <button className='primarybtn'>
                            Register <i className='fa fa-long-arrow-alt-right'></i>    
                        </button>    
                    </div>    
                </div>    
            </div>    
        </section>
        <div className="bottommargin"></div>    
    </>
  )
}

export default Homebackground;