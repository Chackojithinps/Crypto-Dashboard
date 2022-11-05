// import  Drawer  from './Drawer'
import TemporaryDrawer from './Drawer'
import React from 'react'
import Button from '../../Button'
import './style.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='navbar'>
       <h1 className='heading'>
         <Link to='/'>
          <span className='heading-in'>CryptoTracker</span><span style={{color:"var(--blue)"}}>.</span>
          </Link>
       </h1>
       <div className='links-flex'>
          <Link to='/'>
             <p className='links'>Home</p>
          </Link>
          <Link to="/dashboard">
             <p className="links">
               <Button text="Dashboard"/>
             </p>
          </Link>
       </div>
       <div className="menu-div">
          <TemporaryDrawer/>
       </div>
       
    </div>
  )
}

export default Header