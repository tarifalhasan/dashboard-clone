"use client";

import ReactApexChart from "react-apexcharts";

const ApexPieChart = () => {
  const state = {
    series: [44, 55, 41, 17],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 250,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options as any}
        series={state.series}
        type="donut"
      />
    </div>
  );
};

export default ApexPieChart;
