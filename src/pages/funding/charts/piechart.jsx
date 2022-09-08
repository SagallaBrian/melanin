import Chart from "react-apexcharts";

const PieChart = () => {
  const mydatastate = {
    options: {},
    series: [27, 19],
    labels: ["A", "B"],
  };
  return (
    <div className="p-2">
      <div className="donut">
        <Chart
          options={mydatastate.options}
          series={mydatastate.series}
          type="pie"
          width="380"
        />
      </div>{" "}
    </div>
  );
};

export default PieChart;
