import React from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
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
       <div className='data-div'>
          {/* <div className='coin-chip'
              style={{color:coin.price_change_percentage_24h>0?"var(--green)":"red",
                       borderColor:coin.price_change_percentage_24h>0?"var(--green)":"red"}}>
            <p>{coin.price_change_percentage_24h>0?"+"+coin.price_change_percentage_24h.toFixed(2)+" %": coin.price_change_percentage_24h.toFixed(2)+" %"}</p>
         </div> */}
         {/* <div className='coin-trendIcon' 
            style={{borderColor:coin.price_change_percentage_24h>0?"var(--green)":"var(--red)"}}>
            {coin.price_change_percentage_24h>0?
            <div className='green'>
                <TrendingUpRoundedIcon className='green' style={{color:"var(--green)",borderColor:"var(--green)"}}/>
            </div>
           :
           <div className='red'>
             <TrendingDownRoundedIcon style={{color:"var(--red)",borderColor:"var(--green)"}}/>
            </div>
           }
         </div> */}
         <div className='chip'>
             {coin.price_change_percentage_24h>0?
                <div className='upChip'>{"+"+coin.price_change_percentage_24h.toFixed(2)+" %"}</div>:
                <div className='downChip'>{coin.price_change_percentage_24h.toFixed(2)+" %"}</div>
             }
         </div>
         <div className='trendIcon'>
             {coin.price_change_percentage_24h>0?
               <div className='upTrend'>
                   <TrendingUpRoundedIcon/>
               </div>:
               <div className='downTrend'>
                    <TrendingDownRoundedIcon/>
              </div>
             }
         </div>
      </div>
      <div className='coin-price'>
         {coin.price_change_percentage_24h>0?
           <p className='price-up'>${coin.current_price.toFixed(2)}</p>
           :<p className='price-down'>${coin.current_price}</p>
         }
      </div>
      <div className='coin-details'>
           <p className='coin-vol'><span>Total Volume :</span> ${coin.total_volume.toLocaleString()}</p>
           <p className='coin-marketCap'><span>Market Cap :</span> ${coin.market_cap.toLocaleString()}</p>
      </div>
    </div>
  )
}

export default Grid
