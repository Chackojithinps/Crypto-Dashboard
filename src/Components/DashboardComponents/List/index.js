import React from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
const List = ({coin}) => {
  return (
      <tr className='list-coin-box'>
       <td className='list-logo-div min'>
          <img className='list-logo' src={coin.image}/>
     
          <div className='coin-info'>
             <p className='coin-symbol text-td'>{coin.symbol}-USD</p>
             <p className='coin-name text-td coin-name'>{coin.name}</p>
          </div>
       </td>
       <td className='list-data-div min'>
          
         <div className='chip'>
             {coin.price_change_percentage_24h>0?
                <div className='upChip text-td chip-td'>{"+"+coin.price_change_percentage_24h.toFixed(2)+" %"}</div>:
                <div className='downChip text-td chip-td'>{coin.price_change_percentage_24h.toFixed(2)+" %"}</div>
             }
         </div>
         <div className='trendIcon'>
             {coin.price_change_percentage_24h>0?
               <div className='upTrend trend-td'>
                   <TrendingUpRoundedIcon/>
               </div>:
               <div className='downTrend trend-td'>
                    <TrendingDownRoundedIcon/>
              </div>
             }
         </div>
      </td>
      <td className='list-coin-price min '>
         {coin.price_change_percentage_24h>0?
           <p className='price-up text-td'>${coin.current_price.toFixed(2)}</p>
           :<p className='price-down text-td'>${coin.current_price}</p>
         }
      </td>
     
       <td className='coin-vol markt_cap min text-td'> ${coin.total_volume.toLocaleString()}</td>
       <td className='coin-marketCap vol min text-td'> ${coin.market_cap.toLocaleString()}</td>
    
    </tr>
   
  )
}

export default List
