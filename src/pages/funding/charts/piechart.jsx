import Chart from "react-apexcharts";

const PieChart = () => {
  const mydatastate = {
    options: {
      colors: ["#ffab00", "#e4e4e4"],
      title: {
        text: "Diaspora SME Loan",
        align: "left",
      },
      labels: ["Amount Repaid", "Loan Balance"],
    },
    series: [27, 19],
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
