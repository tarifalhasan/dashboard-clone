"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartProps {}

const TotalSalesChats: React.FC<ApexChartProps> = () => {
  const series = [
    {
      name: "Servings",
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 45],
    },
  ];

  const options = {
    annotations: {
      points: [
        {
          x: "Bananas",
          seriesIndex: 0,
          label: {
            borderColor: "#FF9343",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#000",
            },
            text: "Bananas are good",
          },
        },
      ],
    },
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "20%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    colors: ["#FF9343"],

    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      tickPlacement: "on",
    },

    // fill: {
    //   type: "gradient",
    //   gradient: {
    //     shade: "light",
    //     type: "horizontal",
    //     shadeIntensity: 0.25,
    //     gradientToColors: undefined,
    //     inverseColors: true,
    //     opacityFrom: 0.85,
    //     opacityTo: 0.85,
    //     stops: [50, 0, 100],
    //   },
    // },
  };

  return (
    <div id="chart" className=" h-full bg-white rounded-md">
      <div>
        <h2 className=" ml-5 text-xl font-semibold">Total Sales</h2>
      </div>
      <ReactApexChart
        options={options as any}
        series={series as any}
        type="bar"
        height={420}
      />
    </div>
  );
};

export default TotalSalesChats;
