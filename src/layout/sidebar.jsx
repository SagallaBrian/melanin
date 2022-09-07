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
    <div className="bg-light p-3 mel-sidebar">
      <div className="d-flex align-items-center">
        <div className="px-2">
          <img src={logo} alt="" style={imgStyle} />
        </div>
        <div className="flex-grow-1 fw-bold ">Melanin Capital</div>
      </div>

      <div>
        <div className="d-flex">
          <div>
            <MdOutlineHome />
          </div>
          <div>Home</div>
        </div>
        <div className="d-flex">
          <div>
            <MdOutlineSource />
          </div>
          <div>Business Profile</div>
        </div>
        <div className="d-flex">
          <div>
            <MdOutlineBusiness />
          </div>
          <div>Risk Profile</div>
        </div>
        <div className="d-flex">
          <div>
            <MdOutlineQueryStats />
          </div>
          <div>Funding</div>
        </div>
        <div className="d-flex">
          <div>
            <MdOutlineGroup />
          </div>
          <div>Konnect</div>
        </div>
        <div className="d-flex">
          <div>
            <MdOutlineEngineering />
          </div>
          <div>Academy</div>
        </div>
        <div className="d-flex">
          <div>
            <MdOutlineMarkunread />
          </div>
          <div>Support</div>
        </div>
      </div>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
      <p>hey</p>
    </div>
  );
};

export default Sidenav;
