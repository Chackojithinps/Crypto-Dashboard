import React from 'react'
import './styles.css'
const OutlineButton = ({text,onClick}) => {
  return (
    <div className='outline-button-wrapper' onClick={onClick}>
      <p>{text}</p>
    </div>
  )
}

export default OutlineButton
