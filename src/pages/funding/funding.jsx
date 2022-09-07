// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Overview from "./overview";

const Funding = () => {
  return (
    <div>
      <Row>
        <Col xs={8}>
          <Overview />
        </Col>
        <Col>Second Div</Col>
      </Row>
    </div>
  );
};

export default Funding;
