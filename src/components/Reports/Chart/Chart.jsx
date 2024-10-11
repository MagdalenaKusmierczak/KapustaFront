import { ChartWrapper, SectionWrapper } from "./Chart.styled";
import Chart from "react-apexcharts";
import { useMatchMedia } from "../../../hooks/MediaQuery";

const data = [
  { x: "Chicken", y: 1000, fillColor: "#FF751D" },
  { x: "Fuel", y: 500, fillColor: "#FFDAC0" },
  { x: "Beef", y: 800, fillColor: "#FFDAC0" },
];

const ChartComponent = () => {
  //Media
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const options = {
    chart: {
      width: "100%",
      height: "100%",
      type: "bar",

      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        borderRadiusApplication: "end",
        columnWidth: 38,
        distributed: true,
        hideZeroBarsWhenGrouped: true,
        backgroundBarOpacity: 1,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return `${val} UAH`;
      },
      style: {
        fontSize: 12,
        fontFamily: "Roboto",
        fontWeight: 400,
        colors: ["#52555F"],
      },
      offsetY: -25,
      distributed: true,
    },
    xaxis: {
      categories: data.map((item) => item.x),
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      colors: data.map((item) => item.fillColor),
    },
    grid: {
      show: true,
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          yaxis: {
            labels: {
              show: true, 
              offsetX: 60,
              offsetY: -20,
              style: {
                fontSize: 12,
                fontFamily: "Roboto",
                fontWeight: 400,
                colors: ["#52555F"],
              },
            },
          },
          xaxis: {
            show: false,
          },
          grid: {
            show: false,
          },
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: 15,
            },
          },
          dataLabels: {
            enabled: true,
            offsetY: -15,
            position: "center",
          },
        },
      },
    ],
  };

  const series = [
    {
      data: data.map((item) => item.y),
    },
  ];

  return (
    <SectionWrapper>
      <ChartWrapper>
        <Chart
          options={options}
          series={series}
          type="bar"
          height={(isMobile && 493) || (isTablet && 410) || (isDesktop && 422)}
        />
      </ChartWrapper>
    </SectionWrapper>
  );
};

export default ChartComponent;
