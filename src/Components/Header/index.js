// import  Drawer  from './Drawer'
import TemporaryDrawer from './Drawer'
import React from 'react'
import Button from '../../Button'
import './style.css'
const Header = () => {
  return (
    <div className='navbar'>
       <h1 className='heading'>
         <a href='/'>
          <span className='heading-in'>CryptoTracker</span><span style={{color:"var(--blue)"}}>.</span>
          </a>
       </h1>
       <div className='links-flex'>
          <a href='/'>
             <p className='links'>Home</p>
          </a>
          <a href="/dashboard">
             <p className="links">
               <Button text="Dashboard"/>
             </p>
          </a>
       </div>
       <div className="menu-div">
          <TemporaryDrawer/>
       </div>
       
    </div>
  )
}

export default Header