import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Loader1 from '../Components/Loader';
import Header from '../Components/Header'
// import Loader1 from '../Components/Loader'
const CoinPages = () => {
    const [searchParams]=useSearchParams();
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    // useEffect(()=>{
    //     const API_URL="https://api.coingecko.com/api/v3/coins/"+searchParams;
    //     axios.get(API_URL.slice(0,-1)).then((res)=>{
    //         if(res.data){
    //             console.log(res.data)
    //             setData(res.data)
    //             setLoading(false)
    //         }else{
    //             console.log("error")
    //         }
           
    //     })
    // },[searchParams])
  return (
    <div>
       
       <div className='kkkk'>
          
          {loading?<Loader1/>:
          <>
          <Header/>
          <h1>got the ans</h1>
          </>}
       </div>
    </div>
  )
}

export default CoinPages
