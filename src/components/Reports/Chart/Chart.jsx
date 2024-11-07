import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { useMatchMedia } from "../../../hooks/MediaQuery";
import { filteredData } from "../../../redux/reportsQuery/selectors";
import { ChartWrapper, SectionWrapper, Info, InfoWrapper } from "./Chart.styled";

const colors = [
  { fillColor: "#FF751D" },
  { fillColor: "#FFDAC0" },
  { fillColor: "#FFDAC0" },
];

const ChartComponent = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const filteredDataFromStore = useSelector(filteredData);

  if (
    !filteredDataFromStore ||
    Object.keys(filteredDataFromStore).length === 0
  ) {
    return (
      <SectionWrapper>
        <InfoWrapper><Info>Select category to display</Info></InfoWrapper>
      </SectionWrapper>
    );
  }

  const filteredCategoryData = filteredDataFromStore[0];

  const categories = Object.keys(filteredCategoryData).filter(
    (key) => key !== "total"
  );

  const seriesData = categories.map(
    (category) => filteredCategoryData[category]
  );

  // console.log(categories);
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
      categories: categories,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      colors: colors.map((item) => item.fillColor),
    },
    grid: {
      show: true,
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 270,
            height: 240,
            stackOnlyBar: true,
          },
          yaxis: {
            labels: {
              show: false,
              offsetX: 100,
              offsetY: -3,
              style: {
                fontSize: 10,
                fontFamily: "Roboto",
                fontWeight: 400,
                colors: ["#52555F"],
              },
            },
          },
          xaxis: {
            show: false,
            labels: {
              show: false,
              style: {
                fontSize: 10,
              },
            },
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
            formatter: function (val, { seriesIndex, dataPointIndex }) {
              const category = categories[dataPointIndex];
              const shortCategory =
                category.length > 10
                  ? category.substring(0, 8) + "..."
                  : category;
              return `${shortCategory} ${val}`;
            },
            offsetY: -15,
            offsetX: -10,
            style: {
              fontSize: 10,
            },
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "Amount",
      data: seriesData,
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
