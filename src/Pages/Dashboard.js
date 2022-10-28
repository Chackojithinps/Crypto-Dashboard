import axios from 'axios'
import React, { useState,useEffect } from 'react'
import DashboardWrapper from '../Components/DashboardComponents/DashboardWrapper'
import Search from '../Components/DashboardComponents/Search'
import Header from '../Components/Header'
import Loader1 from '../Components/Loader'

const Dashboard = () => {
  const API_URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  const [data,setData]=useState([])
  const [search,setSearch]=useState('')

  const [loading,setLoading]=useState(true)
  
  const filterCoins=data?.filter(
    (coin)=>coin.name.toLowerCase().includes(search.toLowerCase()) ||
     coin.symbol.toLowerCase().includes(search.toLocaleLowerCase()));

  const handleChange=(e)=>{
    setSearch(e.target.value)
  }
  useEffect(()=>{
    axios.get(API_URL).then((res)=>{
      if(res.data){
        console.log(res.data)
        setData(res.data)
        setLoading(false)
      }else{
        console.log("error")
      }
    })
  },[])
  return (
    <div>
      {loading?<Loader1/>:
      <div>
         <Header/>
         <Search handleChange={handleChange}/>
        
         <DashboardWrapper data={filterCoins}/>
      </div>}
     
    </div>
  )
}

export default Dashboard
