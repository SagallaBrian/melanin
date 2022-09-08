import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdNorthEast } from "react-icons/md";

import { Link } from "react-router-dom";

const Overview = () => {
  const pinkBak = {
    backgroundColor: "#ffab00",
  };
  const pinktwo = {
    backgroundColor: "#fec41a",
    padding: "3px",
  };
  return (
    <div className="shadow-sm rounded">
      <Row className="g-0">
        <Col xs={7} className="bg-white rounded">
          <div className="p-3">
            <h4 className="mel-semibold">Get more funding today</h4>
            <div className="small pb-3 text-secondary">
              What kind of funding would you like to get for your business
            </div>
            <Row>
              <Col xs={4}>
                <div className="mel-type-fund p-3">
                  <div className="d-flex align-items-center ">
                    <div className="flex-grow-1 lh-sm small">
                      Get <br /> A Loan
                    </div>
                    <div>
                      <Link to="/expenses" className="mel-fund-link">
                        <MdNorthEast />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={4}>
                <div className="mel-type-fund p-3">
                  <div className="d-flex align-items-center ">
                    <div className="flex-grow-1 lh-sm small">
                      Get Private Capital
                    </div>
                    <div>
                      <Link to="/expenses" className="mel-fund-link">
                        <MdNorthEast />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col style={pinkBak} className="rounded">
          <div className="p-3">
            <h4 className="mel-semibold">Fund Statistics</h4>
            <div style={pinktwo} className="p-2 rounded">
              <h5>KES 6,690,900</h5>
              <div className="small">Total Private Capital</div>
            </div>
            <div style={pinktwo} className="mt-2 p-2 rounded">
              <h5>KES 3,000,000</h5>
              <div className="small">Total Loan Borrowed</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
