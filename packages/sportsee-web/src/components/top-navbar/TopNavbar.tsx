import "./topNavbar.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function TopNavbar() {
  return (
    <div className="top-navbar">
      <img src={logo} />
      <Link to="/">Acceuil</Link>
      <a>Profil</a>
      <a>Réglages</a>
      <a>Communauté</a>
    </div>
  );
}

export default TopNavbar;
