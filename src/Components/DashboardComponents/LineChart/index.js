// import React from 'react'
// import './styles.css'
// import {Line} from 'react-chartjs-2'
// import { Chart as chartJS } from "chart.js/auto"

// const LineChart = ({chartData,options}) => {
//   return (
//     <div>
//         <Line data={chartData} options={options} />
//     </div>
//   )
// }

// export default LineChart

import React from "react";
import "./styles.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, options }) {
  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;