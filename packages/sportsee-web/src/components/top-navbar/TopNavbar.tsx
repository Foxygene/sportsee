import "./topNavbar.css";
import logo from "../../assets/logo.svg";

function TopNavbar() {
  return (
    <div className="top-navbar">
      <img src={logo} />
      <a>Acceuil</a>
      <a>Profil</a>
      <a>Réglages</a>
      <a>Communauté</a>
    </div>
  );
}

export default TopNavbar;
