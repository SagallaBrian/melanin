import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import profile from "../assets/prof.jpeg";

import { MdOutlineNotificationsNone, MdOutlineEmail } from "react-icons/md";

import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const TopNav = ({ title }) => {
  const fonts = {
    fontSize: "15px",
    color: "#212529",
  };
  return (
    <div className="py-2">
      <Navbar expand="lg" sticky="top">
        <Container fluid="lg">
          <Navbar.Brand as={Link} to="/home" className="mel-semibold">
            {title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className=" justify-content-">
            <div className="mx-auto">
              <Form className="d-flex justify-content-end">
                <Form.Control
                  type="search"
                  placeholder="What are you looking for?"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </div>

            <Nav style={fonts}>
              <Nav.Link as={NavLink} to="about" className="pe-3">
                <MdOutlineEmail className="mel-nav-icons nav-color" />
              </Nav.Link>

              <Nav.Link as={NavLink} to="/home" className="pe-3">
                <MdOutlineNotificationsNone className="mel-nav-icons nav-color" />
              </Nav.Link>

              <Nav.Link className="pe-3">
                <div className="d-flex">
                  <img src={profile} alt="" className="profle-pic" />
                  <div className="ps-2">
                    <div className="p-0 m-0 lh-1 nav-color">Tafari Mwangi</div>
                    <div className="p-0 m-0 lh-1 prof-small">
                      &nbsp;Entrepreneur
                    </div>
                  </div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

TopNav.defaultProps = {
  title: "Default Header",
};

TopNav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TopNav;
