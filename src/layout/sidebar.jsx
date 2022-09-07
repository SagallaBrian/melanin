import logo from "../assets/logo.png";
import {
  MdOutlineHome,
  MdOutlineGroup,
  MdOutlineMarkunread,
  MdOutlineBusiness,
  MdOutlineQueryStats,
  MdOutlineFolder,
  MdOutlineEngineering,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  const imgStyle = {
    width: "27px",
  };

  const divActive = {
    color: "#212529",
    textDecoration: "none",
    backgroundColor: "#ffab00",
    borderRadius: "0% 50px 50px 0%",
    fontWeight: "500",
  };

  const notactive = {
    color: "#212529",
    textDecoration: "none",
  };

  return (
    <div className="mel-height  mel-rel">
      <div className="mel-abs p-3 ">
        <div className="d-flex align-items-center pt-2">
          <div className="px-2">
            <img src={logo} alt="" style={imgStyle} />
          </div>
          <div className="flex-grow-1 fw-bold ">Melanin Capital</div>
        </div>

        <div className="mel-sidebar-b">
          <NavLink
            className="d-flex py-3 align-items-center"
            to="/home"
            style={({ isActive }) => (isActive ? divActive : notactive)}
          >
            <div className="px-2">
              <MdOutlineHome className="mel-side-icons" />
            </div>
            <div>Home</div>
          </NavLink>
          <NavLink
            className="d-flex py-3 align-items-center  pe-4"
            to="/business"
            style={({ isActive }) => (isActive ? divActive : notactive)}
          >
            <div className="px-2">
              <MdOutlineFolder className="mel-side-icons" />
            </div>
            <div>Business Profile</div>
          </NavLink>
          <NavLink
            className="d-flex py-3 align-items-center"
            to="/risk"
            style={({ isActive }) => (isActive ? divActive : notactive)}
          >
            <div className="px-2">
              <MdOutlineBusiness className="mel-side-icons" />
            </div>
            <div>Risk Profile</div>
          </NavLink>
          <NavLink
            className="d-flex py-3 align-items-center"
            to="/funding"
            style={({ isActive }) => (isActive ? divActive : notactive)}
          >
            <div className="px-2">
              <MdOutlineQueryStats className="mel-side-icons" />
            </div>
            <div>Funding</div>
          </NavLink>
          <NavLink
            className="d-flex py-3 align-items-center"
            to="/konnect"
            style={({ isActive }) => (isActive ? divActive : notactive)}
          >
            <div className="px-2">
              <MdOutlineGroup className="mel-side-icons" />
            </div>
            <div>Konnect</div>
          </NavLink>
          <NavLink
            className="d-flex py-3 align-items-center"
            to="/academy"
            style={({ isActive }) => (isActive ? divActive : notactive)}
          >
            <div className="px-2">
              <MdOutlineEngineering className="mel-side-icons" />
            </div>
            <div>Academy</div>
          </NavLink>
          <NavLink
            className="d-flex py-3 align-items-center"
            to="/support"
            style={({ isActive }) => (isActive ? divActive : notactive)}
          >
            <div className="px-2">
              <MdOutlineMarkunread className="mel-side-icons" />
            </div>
            <div>Support</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
