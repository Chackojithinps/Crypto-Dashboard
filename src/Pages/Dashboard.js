import axios from 'axios'
import React, { useState,useEffect } from 'react'
import DashboardWrapper from '../Components/DashboardComponents/DashboardWrapper'
import Header from '../Components/Header'

const Dashboard = () => {
  const API_URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get(API_URL).then((res)=>{
      if(res.data){
        setData(res.data)
      }else{
        console.log("error")
      }
    })
  },[])
  return (
    <div>
      <Header/>
      <DashboardWrapper data={data}/>
    </div>
  )
}

export default Dashboard
