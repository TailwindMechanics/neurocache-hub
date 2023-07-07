//path: src\app\components\LineChart.tsx

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  CategoryScale,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import TitleCard from './Cards/TitleCard';

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

  // Updated options
  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        }
      }
    },
  };


  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'MAU',
        data: labels.map(() => { return Math.random() * 100 + 500 }),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <TitleCard title={"Montly Active Users (in K)"}>
      <Line data={data} options={options} />
    </TitleCard>
  )
}

export default LineChart;