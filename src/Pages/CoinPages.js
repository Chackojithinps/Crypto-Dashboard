import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Loader1 from '../Components/Loader';
import Header from '../Components/Header'
import LineChart from '../Components/DashboardComponents/LineChart';
import ChartList from '../Components/DashboardComponents/ChartList'
import { Chart as ChartJS } from "chart.js/auto";


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const CoinPages = () => {
    const [searchParams]=useSearchParams();
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [prices,setPrices]=useState([])
    const [loadingChart,setLoadingChart]=useState(true)
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
          {
            data: [],
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            backgroundColor: "white",
            borderColor: "white",
            pointRadius: 0,
          },
        ],
      });
      const [days, setDays] = React.useState(30);
      const options = {
        plugins: {
          legend: {
            display: false,
          },
        },
      };
    ;
    const today=new Date();
    const priorDate=new Date(new Date().setDate(today.getDate()-days))
    
    const getDaysArray=(start,end)=>{
        // for(var a=[],d=new Date(start);
        //   d<=new Date(end);
        //   d.setDate(d.getDate()+1)
        // ){
        //     a.push(new Date(d).getDate() + '/' +(new Date(d).getUTCMonth()+1))
        // }
        // return a;
        var arr=new Array();
        var dt=new Date(start)
        while(dt<=end){
            arr.push(new Date(dt).getDate() + '/' +(new Date(dt).getMonth()+1))
            dt.setDate(dt.getDate()+1)
        }
        return arr;
    }
    useEffect(() => {
        if (searchParams) {
          getData();
        }
      }, [searchParams]);
    
      const getData = async () => {
        const API_URL = `https://api.coingecko.com/api/v3/coins/${searchParams}`;
    
        const response_data = await axios.get(API_URL.slice(0, -1), {
          crossDomain: true,
        });
    
        if (!response_data) {
          console.log("No data");
          return;
        }
        setData(response_data.data);
    
        const API_URL2 = `https://api.coingecko.com/api/v3/coins/${response_data.data.id}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
    
        const prices_data = await axios.get(API_URL2, {
          crossDomain: true,
        });
    
        if (!prices_data) {
          console.log("No price data");
          return;
        }
    
        setPrices(prices_data.data.prices);
    
        var dates_2 = getDaysArray(priorDate, today);
    
        setChartData({
          labels: dates_2,
          datasets: [
            {
              data: prices_data?.data?.prices?.map((data) => data[1]),
              borderWidth: 2,
              fill: false,
              tension: 0.25,
              backgroundColor: "white",
              borderColor: "white",
              pointRadius: 0,
            },
          ],
        });
    
        setLoadingChart(false);
        setLoading(false);
     }
        const handleChange = async (event) => {
            
            setDays(event.target.value);
            const API_URL2 = `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=${event.target.value}&interval=daily`;
        
            const prices_data = await axios.get(API_URL2, {
              crossDomain: true,
            });
        
            if (!prices_data) {
              console.log("No price data");
              return;
            }
        
            setPrices(prices_data.data.prices);
        
            const priorDate_2 = new Date(
              new Date().setDate(today.getDate() - event.target.value)
            );
        
            var dates_2 = getDaysArray(priorDate_2, today);
        
            setChartData({
              labels: dates_2,
              datasets: [
                {
                  data: prices_data?.data?.prices?.map((data) => data[1]),
                  borderWidth: 2,
                  fill: false,
                  tension: 0.25,
                  backgroundColor: "white",
                  borderColor: "white",
                  pointRadius: 0,
                },
              ],
            });
      }
   
   return (
    <div>
       
       <div className='kkkk'>
          
          {
          loading?<Loader1/>:
          <>
          <Header/>
          <ChartList coin={data}/>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={90}>90</MenuItem>
        </Select>
          <LineChart chartData={chartData} options={options}/>
          </>
         }
       </div>
    </div>
  )

export default CoinPages