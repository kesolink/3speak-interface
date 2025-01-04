import { GiToggles } from "react-icons/gi";
import logo from "../../assets/image/3S_logo.svg";
import "./nav.scss";
import { CiSearch } from "react-icons/ci";
import profile_icon from "../../assets/image/profile-icon.png";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../lib/store";
import { useGetMyQuery } from "../../hooks/getUserDetails";
import { IoIosNotifications } from "react-icons/io";
function Nav({ setSideBar, toggleProfileNav }) {
  const { authenticated, LogOut, userhiveDetails } = useAppStore();

  const getUserProfile = useGetMyQuery()?.profile;
  console.log("User profile", getUserProfile);
  // console.log(getUserProfile.images.avatar);


  return (
    <nav className="nav-container">
      <div className="nav-left flex-dev">
        <GiToggles size={25}className="menu-icon" onClick={() => setSideBar((prev) => (prev === false ? true : false))}/>
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav-middle flex-dev">
        <div className="search-box">
          <input type="text" placeholder="Search community" />
          <CiSearch className="search-icon" />
        </div>
      </div>
      {authenticated ? (
        <div className="nav-right flex-div">
          <span>{getUserProfile?.username}</span>
          <IoIosNotifications size={20} />
          {/* <img src={() => {
              return getUserProfile?.images?.avatar
                ? getUserProfile?.images?.avatar
                : `/images/avatar3.png`;
            }}
            className="profile"
            alt=""
          /> */}
          <img src={getUserProfile?.images?.avatar} alt="" onClick={toggleProfileNav} />
          {/* <button onClick={LogOut}>LogOut</button> */}
        </div>
      ) : (
        <>
          <Link to="/login">
            <button>LOG IN</button>
          </Link>
          {/* <Link to="/newlogin">
            <button>LOG New</button>
          </Link> */}
        </>
      )}
    </nav>
  );
}

export default Nav;
