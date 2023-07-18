//path: src\components\charts\acquisitionChart.tsx

import ReactEcharts from "echarts-for-react";
import { EChartsOption } from "echarts";
import React, { FC } from "react";

const AcquisitionChart: FC = () => {
	const options: EChartsOption = {
		color: [
			"#16BDCA",
			"#FDBA8C",
			"#1A56DB",
			"#D61F69",
			"#9061F9",
			"#6875F5",
		],
		series: [
			{
				name: "Acquisition",
				type: "pie",
				radius: ["5%", "70%"],
				data: [
					{
						value: 30,
						name: "Organic",
					},
					{
						value: 24,
						name: "Referral",
					},
					{ value: 18, name: "Direct" },
					{ value: 12, name: "Social" },
					{ value: 9, name: "Other" },
					{ value: 7, name: "Email" },
				],
				itemStyle: {
					borderColor: "#111827",
					borderWidth: 1,
				},
				emphasis: {
					itemStyle: {
						color: "#111827",
					},
				},
				label: {
					show: false,
				},
				labelLine: {
					show: false,
				},
			},
		],
		tooltip: {
			trigger: "item",
			textStyle: {
				fontSize: 14,
				fontFamily: "Inter, sans-serif",
			},
			formatter: "{b} : {d}%",
		},
	};

	return <ReactEcharts style={{ height: 305 }} option={options} />;
};

export default AcquisitionChart;
