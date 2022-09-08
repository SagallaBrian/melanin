import Chart from "react-apexcharts";

const LineGraph = () => {
  const mydatastate = {
    options: {
      colors: ["#ffab00"],
      chart: {
        id: "basic-bar",
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 45, 32, 42, 30, 47, 33],
      },
    ],
  };
  return (
    <div className="p-2">
      <div className="d-flex p-2 pe-3 align-items-end ">
        <div className=" mel-subtitle mel-semibold mel-border-bottom">
          Current Loans
        </div>
        <div className="mel-small text-secondary flex-grow-1 text-end">
          Current Private Equity
        </div>
      </div>
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
