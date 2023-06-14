import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './styles/chart.css'

const AreaChart = () => {
  const [options, setOptions] = useState({
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false,
        autoSelected: 'pan'
      },
    },
    markers: {
      size: 0,
      hover: {
        size: 9
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      type: 'string',
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"]
    },
    yaxis: {
      show: false,
    },
    tooltip: {

    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: -10,
    },
    colors: ['#F069AE', '#4270DC', '#1AE9B8'],
  });

  const [series, setSeries] = useState([
    {
      name: 'Safety',
      data: [31, 40, 28, 51, 42, 50, 60, 30, 30, 20, 11, 43],

    },
    {
      name: 'Assets',
      data: [11, 32, 45, 32, 34, 52, 41, 30, 11, 20, 34, 50],
    },
    {
      name: 'Credit',
      data: [11, 30, 45, 40, 44, 25, 41, 20, 30, 10, 11, 40],
    },
  ]);

  return (
    <div className=''>
      <ReactApexChart options={options} series={series} type="area" height={253} />
    </div>
  );
};

export default AreaChart;