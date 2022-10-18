import React from 'react'
import './styles.css'
const Button = ({text}) => {
  return (
    <div className='button-wrapper' onClick={()=>alert("hello")}>
      <p>{text}</p>
    </div>
  )
}

export default Button
