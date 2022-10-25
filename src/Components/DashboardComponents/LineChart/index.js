import React from 'react'
import './styles.css'
import {Line} from 'react-chartjs-2'
const LineChart = ({chartData,options}) => {
  return (
    <div>
        <Line data={chartData} options={options} />
    </div>
  )
}

export default LineChart
