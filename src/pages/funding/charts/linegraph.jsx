import Chart from "react-apexcharts";

const LineGraph = () => {
  const mydatastate = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 45, 32, 42, 30, 47],
      },
    ],
  };
  return (
    <div className="p-2">
      <div className="mixed-chart">
        <Chart
          options={mydatastate.options}
          series={mydatastate.series}
          type="line"
          width="100%"
          height="300"
        />
      </div>
    </div>
  );
};

export default LineGraph;
