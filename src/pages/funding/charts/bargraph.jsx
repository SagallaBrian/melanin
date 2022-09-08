import Chart from "react-apexcharts";

const BarGraph = () => {
  const mydatastate = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [0, 0, 40, 45, 50, 49, 60, 70, 91, 45, 0, 0],
      },
    ],
  };
  return (
    <div className="mt-4 p-2 bg-white shadow-sm rounded">
      <div className="mixed-chart">
        <Chart
          options={mydatastate.options}
          series={mydatastate.series}
          type="bar"
          width="100%"
          height="400"
        />
      </div>
    </div>
  );
};

export default BarGraph;
