import React from 'react'
import './styles.css'
const Grid = ({coin}) => {
  return (
    <div className='coin-box'>
       <div className='logo-div'>
          <img className='logo' src={coin.image}/>
          <div className='coin-info'>
             <p className='coin-symbol'>{coin.symbol}-USD</p>
             <p className='coin-name'>{coin.name}</p>
          </div>
       </div>
    </div>
  )
}

export default Grid
