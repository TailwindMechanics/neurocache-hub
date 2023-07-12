//path: src\components\charts\salesChart.tsx

import ReactEcharts from 'echarts-for-react';
import React from 'react';


const SalesChart = () => {
    const data = [
        {
            name: "Revenue",
            data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
            color: "#1A56DB",
        },
        {
            name: "Revenue (previous period)",
            data: [6556, 6725, 6424, 6356, 6586, 6756, 6616],
            color: "#FDBA8C",
        },
    ];
    const option = {
        title: {
            text: "Sales Chart",
            textStyle: {
                color: "#374151",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 500,
            },
        },
        tooltip: {
            trigger: "axis",
            backgroundColor: "#374151",
            textStyle: {
                color: "#93ACAF",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
            },
        },
        grid: {
            show: true,
            borderWidth: 1,
            borderColor: "#F3F4F6",
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "01 Feb",
                "02 Feb",
                "03 Feb",
                "04 Feb",
                "05 Feb",
                "06 Feb",
                "07 Feb",
            ],
            axisLabel: {
                color: "#374151",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
            },
            axisLine: {
                lineStyle: {
                    color: "#F3F4F6",
                },
            },
        },
        yAxis: {
            type: "value",
            axisLabel: {
                color: "#374151",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                formatter: function (value: string) {
                    return "$" + value;
                },
            },
            axisLine: {
                lineStyle: {
                    color: "#F3F4F6",
                },
            },
        },
        series: [
            {
                name: "Revenue",
                type: "line",
                stack: "Total",
                areaStyle: {},
                emphasis: {
                    focus: "series",
                },
                data: data[0].data,
                lineStyle: {
                    color: data[0].color,
                },
            },
            {
                name: "Revenue (previous period)",
                type: "line",
                stack: "Total",
                areaStyle: {},
                emphasis: {
                    focus: "series",
                },
                data: data[1].data,
                lineStyle: {
                    color: data[1].color,
                },
            },
        ],
    };

    return <ReactEcharts style={{ height: 420 }} option={option} />;
};

export default SalesChart;
