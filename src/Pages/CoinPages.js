import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../Components/Header'

const CoinPages = () => {
    const [searchParams]=useSearchParams();
    console.log(searchParams)
  return (
    <div>
       <Header/>
       <h1>{searchParams}</h1>
    </div>
  )
}

export default CoinPages
