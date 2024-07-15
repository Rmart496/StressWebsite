import React from 'react';
import SkeletonForAllPages from "../GeneralComponents/SkeletonForAllPages";
import "../../Styling/bootstrap.css"
import "./RoadMapPageStyling/RoadMapPageStyling.scss";
import ReactECharts from "echarts-for-react";
import EChartsReact from 'echarts-for-react';

const AmbientPlayerPage = () => {
	function makeChart(title, data) {
		return {
			title: {
				text: title,
				subtext: '',
				left: 'center',
				padding: [40, 0, 0, 0]
			},
			tooltip: {
				trigger: 'item'
			},
			legend: {
				show: true,
				orient: 'vertical',
				left: 'right',
				padding: [25, 0, 0, 0],
				itemGap: 25
			},
			series: [
				{
				name: 'Access From',
				type: 'pie',
				radius: '50%',
				data: data,
				emphasis: {
					itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				},
				label: {
					show: false,
				}
				}
			],
		}
	}

	const pieChart_Triggers = makeChart("Triggers", [
		{ value: 20, name: '20% Home' },
		{ value: 40, name: '40% Work' },
		{ value: 20, name: '20% School' },
		{ value: 20, name: '20% Social Life' },
	]);

	const pieChart_Feelings = makeChart("Feelings", [
		{ value: 20, name: '20% Excited' },
		{ value: 20, name: '20% Happy' },
		{ value: 40, name: '40% Indifferent' },
		{ value: 0, name: '0% Sad' },
		{ value: 20, name: '20% Angry' },
	]);

	const pieChart_Signs = makeChart("Signs", [
		{ value: 20, name: '20% Body' },
		{ value: 40, name: '40% Mind' },
		{ value: 20, name: '20% Emotion' },
		{ value: 20, name: '20% Behavior' },
	]);

	const pieChart_Strategies = makeChart("Strategies", [
		{ value: 20, name: '20% Breathing' },
		{ value: 40, name: '20% Positive Talk' },
		{ value: 0, name: '0% Listen To Music' },
		{ value: 20, name: '20% Talk To Friends' },
		{ value: 20, name: '40% Group Support' },
	]);

	const lineGraph = {
		xAxis: {
		  type: 'category',
		  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
		},
		yAxis: {
		  type: 'value',
		  min: 1,
		  max: 5
		},
		series: [
		  {
			data: [4, 1, 5, 4, 2],
			type: 'line',
			smooth: true
		  }
		],
		grid: {
			width: 1000,
			left: "center"
		}
	};

	const calendar = {
		calendar: {
			left: "center",
			cellSize: [70, 70],
			orient: 'vertical',
			range: '2017-01',
			yearLabel: { show: false }
		},
		series: {
			type: "scatter",
			coordinateSystem: 'calendar',
			symbolSize: 0,
			label: {
				show: true,
				formatter: function (params) {
					return params.data[0].split("-")[2];
				  },
				color: '#000'
			},
			data: [
				["2017-01-1"],
				["2017-01-2"],
				["2017-01-3"],
				["2017-01-4"],
				["2017-01-5"],
				["2017-01-6"],
				["2017-01-7"],
				["2017-01-8"],
				["2017-01-9"],
				["2017-01-10"],
				["2017-01-11"],
				["2017-01-12"],
				["2017-01-13"],
				["2017-01-14"],
				["2017-01-15"],
				["2017-01-16"],
				["2017-01-17"],
				["2017-01-18"],
				["2017-01-19"],
				["2017-01-20"],
				["2017-01-21"],
				["2017-01-22"],
				["2017-01-23"],
				["2017-01-24"],
				["2017-01-25"],
				["2017-01-26"],
				["2017-01-27"],
				["2017-01-28"],
				["2017-01-29"],
				["2017-01-30"],
				["2017-01-31"],
			],
			silent: true
		}
	  };
		
	return (
		<SkeletonForAllPages>
		<div style={{display: "block"}}>
			<ReactECharts option={pieChart_Triggers} style={{height: "450px", width: "30%", float: "left"}}/>
			<ReactECharts option={pieChart_Feelings} style={{height: "450px", width: "30%", float: "left"}}/>
			<ReactECharts option={pieChart_Signs} style={{height: "450px", width: "30%", float: "left"}}/>
			<ReactECharts option={pieChart_Strategies} style={{height: "450px", width: "30%", float: "left"}}/>
			<ReactECharts option={lineGraph} style={{height: "450px", width: "50%", float: "left"}}/>
			<ReactECharts option={calendar} style={{height: "450px", width: "50%", float: "left"}}/>
		</div>
		
		</SkeletonForAllPages>
	);
		
}

export default AmbientPlayerPage;