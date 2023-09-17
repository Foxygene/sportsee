import "./sideNavbar.css";
import bike from "../../assets/bike.svg";
import lift from "../../assets/lift.svg";
import meditation from "../../assets/meditation.svg";
import swim from "../../assets/swim.svg";

function SideNavbar() {
  return (
    <div className="side-navbar">
      <div className="icons-container">
        <img src={meditation} />
        <img src={swim} />
        <img src={bike} />
        <img src={lift} />
      </div>
      <small>Copyright Sportsee2020</small>
    </div>
  );
}

export default SideNavbar;
