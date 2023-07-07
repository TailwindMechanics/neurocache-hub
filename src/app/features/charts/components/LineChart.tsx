//path: src\app\features\charts\components\LineChart.tsx

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartConfiguration,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LineChart: React.FC = () => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data: ChartConfiguration<'line', number[], string> = {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          fill: true,
          label: 'MAU',
          data: labels.map(() => Math.random() * 100 + 500),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    },
    options,
  };

  return(
    <TitleCard title={"Monthly Active Users (in k)"} >
      <Line data={data.data} options={options}/>
    </TitleCard>
  );
}

export default LineChart;
