import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Loader1 from '../Components/Loader';
import Header from '../Components/Header'
import LineChart from '../Components/DashboardComponents/LineChart';
const CoinPages = () => {
    const [searchParams]=useSearchParams();
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [prices,setPrices]=useState([])
    const [loadingChart,setLoadingChart]=useState(true)
    useEffect(()=>{
        const API_URL="https://api.coingecko.com/api/v3/coins/"+searchParams;
        axios.get(API_URL.slice(0,-1)).then((res)=>{  //here in this link last an = sighn came .so to avoid we use slice here.
            if(res.data){
                console.log(res.data)
                setData(res.data)
                setLoading(false)
            }else{
                console.log("error")
            }
           
        })
    },[searchParams])
    // 
    useEffect(()=>{
      const API_URL=`https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=30&interval=daily`;
      axios.get(API_URL).then((res)=>{
          if(res.data){
              console.log(res.data)
              setPrices(res.data.prices)
              setLoadingChart(false)
          }else{
              console.log("error")
          }
         
      })
  },[data])
  
    return (
    <div>
       
       <div className='kkkk'>
          
          {
          loading?<Loader1/>:
          <>
          <Header/>
          <LineChart/>
          </>
         }
       </div>
    </div>
  )
}
export default CoinPages
