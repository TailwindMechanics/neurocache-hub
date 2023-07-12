//path: src\components\charts\userSignupsChart.tsx

import ReactEcharts from 'echarts-for-react';
import React, { FC } from 'react';


const UserSignupsChart: FC = () => {
    const colors = ['#374151']

    const option = {
        grid: {
            show: false,
        },
        xAxis: {
            type: 'category',
            data: [
                '01 Feb',
                '02 Feb',
                '03 Feb',
                '04 Feb',
                '05 Feb',
                '06 Feb',
                '07 Feb',
            ],
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
        series: [{
            data: [34, 45, 53, 38, 55, 32, 36],
            type: 'bar',
            barWidth: '25%',
            itemStyle: {
                color: colors[0],
                borderRadius: [3, 3, 0, 0],
            },
            emphasis: {
                itemStyle: {
                    color: colors[0],
                    shadowColor: 'rgba(0, 0, 0, 0.8)',
                    shadowBlur: 10,
                    borderRadius: [3, 3, 0, 0],
                }
            },
        }],
        tooltip: {
            show: true,
            trigger: 'item',
            textStyle: {
                fontSize: 14,
                fontFamily: 'Inter, sans-serif',
            },
        },
    };

    return <ReactEcharts option={option} />;
};

export default UserSignupsChart;