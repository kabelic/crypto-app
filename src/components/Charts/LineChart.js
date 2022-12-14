import { Line } from 'react-chartjs-2'
// import {Chart as ChartJS} from 'chart.js/auto'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const options = {
    responsive: true,
    scales:{
        x:{
            ticks:{
                color: '#FFFFFF',
            },
            grid:{
                color: '#272727',
            }
        },
        y:{
            ticks:{
                color: '#FFFFFF',
            },
            grid:{
                color: '#272727',
            }
        }
      },
    plugins: {
      
      legend: {
        display: false,
        position: 'bottom',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
      Tooltip:{
        display: false,
      },
      
    },
  };

const LineChart = ({chartData}) => {
    return(
        <Line options={options} data={chartData} />
    )
}

export default LineChart