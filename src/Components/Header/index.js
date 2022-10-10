import React from 'react'
import Button from '../../Button'
import './style.css'
const Header = () => {
  return (
    <div className='navbar'>
       <h1 className='heading1'>
          CryptoTracker<span style={{color:"var(--blue)"}}>.</span>
       </h1>
       <div className='links-flex'>
          <a href='/'>
             <p className='links'>Home</p>
          </a>
          <a href="/search">
             <p className="links">Search</p>
          </a>
          <a href="/about-us">
             <p className="links">About Us</p>
          </a>
          <a href="/dashboard">
             <p className="links">
               <Button text="Dashboard" onClick={()=>alert("Hi")}/>
             </p>
          </a>
       </div>
       
    </div>
  )
}

export default Header