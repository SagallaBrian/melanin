import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopNav from "./topnav";
import Sidenav from "./sidebar";
// import Home from "../pages/home/home";
import Funding from "../pages/funding/funding";

const Layout = () => {
  return (
    <div className="mel-height">
      <Container fluid className="mel-height">
        <Row className="mel-height">
          <Col xl={2}>
            <Sidenav />
          </Col>
          <Col xl={10}>
            <TopNav title={"Funding"} />
            <div className="bg-light p-3 px-4">
              <Funding />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
