import Chart from "react-apexcharts";

const BarGraph = () => {
  const mydatastate = {
    options: {
      colors: ["#ffab00"],
      title: {
        text: "Loan history",
        align: "left",
        style: {
          fontSize: "23px",
          fontWeight: "bold",
        },
      },

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
        data: [0, 0, 0, 0, 50, 49, 60, 70, 0, 0, 0, 0],
      },
    ],
  };
  return (
    <div className="mt-4 p-2 py-4 bg-white shadow-sm rounded">
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
