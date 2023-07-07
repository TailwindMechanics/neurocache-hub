//path: src\app\components\BarChart.tsx

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartOptions, ChartData } from 'chart.js';
import TitleCard from './Cards/TitleCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC = () => {

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const data: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: 'Store 1',
        data: labels.map(() => { return Math.random() * 1000 + 500 }),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Store 2',
        data: labels.map(() => { return Math.random() * 1000 + 500 }),
        backgroundColor: 'rgba(53, 162, 235, 1)',
      },
    ],
  };

  return(
    <TitleCard title={"Revenue"}>
          <Bar options={options} data={data} />
    </TitleCard>
  )
}

export default BarChart;
