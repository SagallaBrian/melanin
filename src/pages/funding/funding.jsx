// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Overview from "./overview";
import BarGraph from "./charts/bargraph";
import LineGraph from "./charts/linegraph";
import PieChart from "./charts/piechart";

const Funding = () => {
  return (
    <div>
      <Row>
        <Col xs={8}>
          <Overview />
          <BarGraph />
        </Col>
        <Col>
          <div className="bg-white shadow-sm rounded">
            <LineGraph />
            <PieChart />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Funding;
