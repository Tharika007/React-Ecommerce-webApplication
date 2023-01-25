import React from "react"
import "./Product.css"
import { productCard } from "../../data"
import pic from '../../Images/Homebackground.jpg';

const Productcard = () => {
  return (
    <>
      <section className='productcard '>
          {productCard.map((val) => (
            <div className="col">
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.itemName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.itemdetails.map((details) => (
                      <>
                        <div className='box'>
                            <h4>{details.price}</h4>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <button className='outline-btn'>Buy Now !</button>
            </div>
          </div>
          ))}
      </section>
    </>
  )
}

export default Productcard;
