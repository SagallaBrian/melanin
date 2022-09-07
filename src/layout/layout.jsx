import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopNav from "./topnav";
import Sidenav from "./sidebar";

const Layout = () => {
  return (
    <div className="mel-height">
      <Container fluid className="mel-height">
        <Row className="mel-height">
          <Col xl={2}>
            <Sidenav />
          </Col>
          <Col xl={8}>
            <TopNav title={"Funding"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
