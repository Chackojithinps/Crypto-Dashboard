import React, { useEffect, useState } from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';
const List = ({coin}) => {
   const [volume,setVolume]=useState(coin.market_data.total_volume.usd);
   useEffect(()=>{
      if(volume){
         if(volume>=1000 && volume<1000000){
            setVolume(volume.toString().slice(0,-3)+"."+
                      volume.toString().slice(-3,-1)+"K")
         }else if(volume>=1000000 && volume<1000000000){
            setVolume(volume.toString().slice(0,-6)+"."+
                      volume.toString().slice(-6,-4)+"M")
         }
         else if(volume>=1000000000){
            setVolume(volume.toString().slice(0,-9)+"."+
                      volume.toString().slice(-9,-7)+"B")
         }
      }
      },[volume])
  return (
   <Link to={`/coin?${coin.id}`}>
      <div className='list-coin-box'>
         
       <div className='list-logo-div min'>
          <img className='list-logo' src={coin.image.large}/>
     
          <div className='coin-info coin-info-td'>
             <p className='coin-symbol text-td'>{coin.symbol}-USD</p>
             <p className='coin-name text-td coin-name'>{coin.name}</p>
          </div>
       </div>
       <div className='list-data-div min'>
          
         <div className='chip'>
             {coin.market_data.price_change_percentage_24h>0?
                (<div className='upChip text-td chip-td'>{"+"+coin.market_data.price_change_percentage_24h.toFixed(2)+" %"}</div>):
                (<div className='downChip text-td chip-td'>{coin.market_data.price_change_percentage_24h.toFixed(2)+" %"}</div>)
                }
         </div>
         <div className='trendIcon'>
             {coin.market_data.price_change_percentage_24h>0?
               <div className='upTrend trend-td'>
                   <TrendingUpRoundedIcon/>
               </div>:
               <div className='downTrend trend-td'>
                    <TrendingDownRoundedIcon/>
              </div>
             }
         </div>
      </div>
      <div className='list-coin-price min '>
         {coin.market_data.price_change_percentage_24h>0?
           <p className='price-up text-td'>${coin.market_data.current_price.usd.toFixed(2)}</p>
           :<p className='price-down text-td'>${coin.market_data.current_price.usd.toFixed(2)}</p>
         }
      </div>
     
       <div className='coin-vol col markt_cap  min text-td volume_td'> ${coin.market_data.total_volume.usd.toLocaleString()}</div>
       <div className='coin-vol col markt_cap min text-td vol_td'> ${volume}</div>
       <div className='coin-marketCap col vol min text-td'> ${coin.market_data.market_cap.usd.toLocaleString()}</div>
      
    </div>
  </Link>
  )
}

export default List
