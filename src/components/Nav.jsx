import React from 'react'
import { useNavigate } from 'react-router'
import './Design.css'
const Nav = () => {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1) }
  return (
    <div>
      <button onClick={back} ><i className='fas fa-arrow-left'></i></button>
    </div>
  )
}

export default Nav
