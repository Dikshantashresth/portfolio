import React, { useState } from 'react'
import design from './design.json'
import './Design.css'
import Nav from './Nav'

const Design = () => {
  const [count, setCount] = useState(0)

  const next = () => {
    setCount((prev) => (prev < design.length - 1 ? prev + 1 : 0))
  }
const prev = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : design.length - 1))
  }
  return (
    <>
    <Nav/>
  
    <div className="image-container">
       
      <button onClick={prev}><i className='fas fa-arrow-left'></i></button>
      <div className="design-item">
         <h1 className='design-title'>My Designs</h1>
        <div className="image-wrapper">
          <img src={design[count].img} alt={design[count].title} />
        </div>
        <h2>{design[count].title}</h2>
        <p>{design[count].description}</p>
        
      </div>
      <button onClick={next}><i className='fas fa-arrow-right'></i></button>
    </div>
    </>
  )
}

export default Design
