//path: src\components\charts\newProductsChart.tsx

import ReactEcharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import React, { FC } from 'react';


const NewProductsChart: FC = () => {
    const options: EChartsOption = {
        color: ['#1A56DB', '#FDBA8C'],
        grid: {
            show: false,
        },
        xAxis: {
            type: 'category',
            data: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
        },
        yAxis: {
            type: 'value',
            show: false,
        },
        series: [
            {
                data: [170, 180, 164, 145, 174, 170, 155],
                type: 'bar',
                name: 'Digital',
                barWidth: '50%',
                itemStyle: {
                    borderRadius: 3,
                },
                emphasis: {
                    itemStyle: {
                        color: '#1A56DB',
                    },
                },
            },
            {
                data: [120, 134, 167, 179, 145, 182, 143],
                type: 'bar',
                name: 'Goods',
                barWidth: '50%',
                itemStyle: {
                    borderRadius: 3,
                },
                emphasis: {
                    itemStyle: {
                        color: '#FDBA8C',
                    },
                },
            },
        ],
        tooltip: {
            trigger: 'axis',
            textStyle: {
                fontSize: 14,
                fontFamily: 'Inter, sans-serif',
            },
        },
        legend: {
            show: false,
        },
    };

    return <ReactEcharts style={{ height: 305 }} option={options} />;
};

export default NewProductsChart;