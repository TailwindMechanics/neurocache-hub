//path: src\app\features\charts\components\BarChart.tsx

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartConfiguration
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC = () => {
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      }
    },
  };
      
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
  const data: ChartConfiguration<'bar', number[], string> = {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Store 1',
          data: labels.map(() => Math.random() * 1000 + 500),
          backgroundColor: 'rgba(255, 99, 132, 1)',
        },
        {
          label: 'Store 2',
          data: labels.map(() => Math.random() * 1000 + 500),
          backgroundColor: 'rgba(53, 162, 235, 1)',
        },
      ],
    },
    options,
  };

  return(
    <TitleCard title={"No of Orders"} topMargin="mt-2">
      <Bar options={options} data={data.data} />
    </TitleCard>
  );
}

export default BarChart;
