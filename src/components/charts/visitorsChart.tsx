//path: src\components\charts\visitorsChart.tsx

import ReactEcharts from "echarts-for-react";
import { graphic } from "echarts";
import React, { FC } from "react";

const VisitorsChart: FC = () => {
	const color = "rgba(255, 255, 255, .7)";

	const option = {
		grid: {
			show: false,
		},
		xAxis: {
			type: "category",
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
			type: "value",
			show: false,
		},
		series: [
			{
				data: [
					500, 590, 600, 520, 610, 550,
					600,
				],
				type: "line",
				showSymbol: false,
				smooth: true,
				areaStyle: {
					color: new graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[
							{
								offset: 0,
								color: color,
							},
							{
								offset: 1,
								color: "rgba(0, 0, 0, 0)",
							},
						],
					),
				},
				lineStyle: {
					width: 0,
				},
			},
		],
		tooltip: {
			show: true,
			trigger: "axis",
			textStyle: {
				fontSize: 14,
				fontFamily: "Inter, sans-serif",
			},
		},
	};

	return <ReactEcharts style={{ height: 305 }} option={option} />;
};

export default VisitorsChart;
