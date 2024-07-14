import React from 'react';
import SkeletonForAllPages from "../GeneralComponents/SkeletonForAllPages";
import "../../Styling/bootstrap.css"
import "./RoadMapPageStyling/RoadMapPageStyling.scss";
import ReactECharts from "echarts-for-react";
import EChartsReact from 'echarts-for-react';

const AmbientPlayerPage = () => {
	const pieChart = {
		title: {
			text: 'Referer of a Website',
			subtext: 'Fake Data',
			left: 'center'
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			show: false,
			orient: 'vertical',
			left: 'left'
		},
		series: [
			{
			name: 'Access From',
			type: 'pie',
			radius: '50%',
			data: [
				{ value: 1048, name: 'Search Engine' },
				{ value: 735, name: 'Direct' },
				{ value: 580, name: 'Email' },
				{ value: 484, name: 'Union Ads' },
				{ value: 300, name: 'Video Ads' }
			],
			emphasis: {
				itemStyle: {
				shadowBlur: 10,
				shadowOffsetX: 0,
				shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
			}
		]
	};

	const lineGraph = {
		xAxis: {
		  type: 'category',
		  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {
		  type: 'value'
		},
		series: [
		  {
			data: [820, 932, 901, 934, 1290, 1330, 1320],
			type: 'line',
			smooth: true
		  }
		]
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
		
		<div id="pieChart">
			<ReactECharts option={pieChart} />
		</div>
		<div>
		<ReactECharts option={lineGraph} />
		</div>
		<div>
		<ReactECharts option={calendar} style={{height: "450px", width: "100%"}}/>
		</div>
		
		</SkeletonForAllPages>
	);
		
}

export default AmbientPlayerPage;