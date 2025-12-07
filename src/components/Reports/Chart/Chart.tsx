import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { useMatchMedia } from "../../../utils/hooks/useMatchMedia";
import { filteredData } from "../../../redux/reportsQuery/selectors";
import {
  ChartWrapper,
  SectionWrapper,
  Info,
  InfoWrapper,
} from "./Chart.styled";

import { chartColors } from "../../../utils/constants/chart";

const createChartOptions = (categories: string[]) => ({
  chart: {
    width: "100%",
    height: "100%",
    type: "bar" as const,
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
      borderRadiusApplication: "end" as const,
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
    formatter: function (val: number) {
      return `${val} $`;
    },
    style: {
      fontSize: "12",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      colors: ["var(--quinary-color)"],
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
    colors: chartColors.map((item) => item.fillColor),
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
              fontSize: "10",
              fontFamily: "Roboto",
              fontWeight: 400,
              colors: ["var(--quinary-color)"],
            },
          },
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
            style: {
              fontSize: "10",
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
          formatter: function (val: number, { dataPointIndex }: { dataPointIndex: number }) {
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
});

const ChartComponent = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const filteredDataFromStore = useSelector(filteredData);

  if (
    !filteredDataFromStore ||
    Object.keys(filteredDataFromStore).length === 0
  ) {
    return (
      <SectionWrapper>
        <InfoWrapper>
          <Info>Select category to display</Info>
        </InfoWrapper>
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

  const options = createChartOptions(categories);

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
          height={isMobile ? 493 : isTablet ? 410 : isDesktop ? 422 : 422}
        />
      </ChartWrapper>
    </SectionWrapper>
  );
};

export default ChartComponent;
