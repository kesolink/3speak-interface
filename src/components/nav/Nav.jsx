import { GiToggles } from "react-icons/gi";
import logo from "../../assets/image/3S_logo.svg";
import "./nav.scss";
import { CiSearch } from "react-icons/ci";
import profile_icon from "../../assets/image/profile-icon.png";
import Sidebar from "../Sidebar/Sidebar";
function Nav( {setSideBar}) {
  return (
    <nav className="nav-container">
      <div className="nav-left flex-dev">
        <GiToggles size={25} className="menu-icon" onClick={()=> setSideBar(prev => prev ===false? true: false)} />
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav-middle flex-dev">
        <div className="search-box">
          <input type="text" placeholder="Search community" />
          <CiSearch className="search-icon" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <span>kesolink</span>
        <img src={profile_icon} className="profile" alt="" />
        
      </div>
    </nav>
  );
}

export default Nav;
