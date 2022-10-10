import React from 'react'
import './styles.css'
const Button = ({text,onClick}) => {
  return (
    <div className='button-wrapper' onClick={onClick}>
      <p>{text}</p>
    </div>
  )
}

export default Button
