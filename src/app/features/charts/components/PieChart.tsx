//path: src\app\features\charts\components\PieChart.tsx

import React from 'react';
import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartConfiguration,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';
import Subtitle from '../../../components/Typography/Subtitle';

ChartJS.register(ArcElement, Tooltip, Legend, Filler, Title);

const PieChart: React.FC = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Here's the change
      },
    },
  };

  const labels = ['India', 'Middle East', 'Europe', 'US', 'Latin America', 'Asia(non-india)'];

  const data: ChartConfiguration<'pie', number[], string> = {
    type: 'pie',
    data: {
      labels,
      datasets: [
        {
          label: '# of Orders',
          data: [122, 219, 30, 51, 82, 13],
          backgroundColor: [
            'rgba(255, 99, 255, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 255, 0.8)',
            'rgba(75, 192, 255, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 255, 0.8)',
          ],
          borderColor: [
            'rgba(255, 99, 255, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 255, 1)',
            'rgba(75, 192, 255, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options,
  };

  return (
    <TitleCard title={"Orders by country"}>
      <Pie options={options} data={data.data} />
    </TitleCard>
  );
};

export default PieChart;
