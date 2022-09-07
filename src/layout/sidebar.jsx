import logo from "../assets/logo.png";
import {
  MdOutlineHome,
  MdOutlineGroup,
  MdOutlineMarkunread,
  MdOutlineSource,
  MdOutlineBusiness,
  MdOutlineQueryStats,
  MdOutlineEngineering,
} from "react-icons/md";

const Sidenav = () => {
  const imgStyle = {
    width: "27px",
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
          <div className="d-flex py-3 align-items-center">
            <div className="px-2">
              <MdOutlineHome className="mel-side-icons" />
            </div>
            <div>Home</div>
          </div>
          <div className="d-flex py-3 align-items-center">
            <div className="px-2">
              <MdOutlineSource className="mel-side-icons" />
            </div>
            <div>Business Profile</div>
          </div>
          <div className="d-flex py-3 align-items-center">
            <div className="px-2">
              <MdOutlineBusiness className="mel-side-icons" />
            </div>
            <div>Risk Profile</div>
          </div>
          <div className="d-flex py-3 align-items-center">
            <div className="px-2">
              <MdOutlineQueryStats className="mel-side-icons" />
            </div>
            <div>Funding</div>
          </div>
          <div className="d-flex py-3 align-items-center">
            <div className="px-2">
              <MdOutlineGroup className="mel-side-icons" />
            </div>
            <div>Konnect</div>
          </div>
          <div className="d-flex py-3 align-items-center">
            <div className="px-2">
              <MdOutlineEngineering className="mel-side-icons" />
            </div>
            <div>Academy</div>
          </div>
          <div className="d-flex py-3 align-items-center">
            <div className="px-2">
              <MdOutlineMarkunread className="mel-side-icons" />
            </div>
            <div>Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
