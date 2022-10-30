import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Loader1 from '../Components/Loader';
import Header from '../Components/Header'
import LineChart from '../Components/DashboardComponents/LineChart';
import ChartList from '../Components/DashboardComponents/ChartList'
import { Chart as ChartJS } from "chart.js/auto";



const CoinPages = () => {
    const [searchParams]=useSearchParams();
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [prices,setPrices]=useState([])
    const [loadingChart,setLoadingChart]=useState(true)
    const [chartData,setChartData]=useState({})
    const [days, setDays] = React.useState(30);

    const handleChange = (event) => {
        console.log("value///",event)
        setDays(event.target.value);
      }; 

    const today=new Date();
    const priorDate=new Date(new Date().setDate(today.getDate()-days))
    
    const getDateArray=(start,end)=>{
        var arr=new Array();
        var dt=new Date(start)
        while(dt<=end){
            arr.push(new Date(dt).getDate() + '/' +(new Date(dt).getMonth()+1))
            dt.setDate(dt.getDate()+1)
        }
        return arr;
    }
   
    useEffect(()=>{
        const API_URL="https://api.coingecko.com/api/v3/coins/"+searchParams;
         axios
          .get(API_URL.slice(0,-1),{crossDomain:true})   //here in this link last an = sighn came .so to avoid we use slice here.
          .then((res)=>{ 
            if(res.data){
                console.log(res.data)
                setData(res.data)
                const API_URL2=`https://api.coingecko.com/api/v3/coins/${res.data.id}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
                    axios.get(API_URL2).then((response)=>{
                        if(response.data){
                            console.log(response.data)
                            setPrices(response.data.prices)
                            setLoadingChart(false)
                            setLoading(false)
                            setChartData({
                                  labels: getDateArray(priorDate,today),
                                  datasets:[
                                      {
                                         data:prices?.map((data)=>data[1]),
                                         borderWidth:2,
                                         fill:false,
                                         tension:0.25,
                                         backgroundColor:"white",
                                         borderColor:"white",
                                         pointRadious:0,
                                      }
                                  ]
                                }
                            )
                        }else{
                            console.log("error")
                        }
                       
                    })
                
            }else{
                console.log("error")
            }
           
        })
    },[searchParams])
   return (
    <div>
       
       <div className='kkkk'>
          
          {
          loading?<Loader1/>:
          <>
          <Header/>
          <ChartList coin={data}/>
          {/* <BasicSelect handleChange={handleChange} age={age}/> */}
          <form className='selectForm'>
            <label for="cars">Price Change in the last</label>
            <select onChange={handleChange}
            className="selectInput" id="cars" name="cars">
                <option value={30}>30 Days</option>
                <option value={60}>60 Days</option>
                <option value={90}>90 Days</option>
                <option value={7}>7 Days</option>
            </select>
          </form>
          <LineChart chartData={chartData}/>
          </>
         }
       </div>
    </div>
  )
}
export default CoinPages
