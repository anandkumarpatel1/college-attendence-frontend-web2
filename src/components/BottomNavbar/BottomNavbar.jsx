import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./BottomNav.scss";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadTeacher, logoutTeacher } from "../../action/Teacher";

function BottomNavbar() {
  const [root, setRoot] = useState(window.location.pathname);
  const [toggle, setToggle] = useState(true);

  const dispatch = useDispatch()

  const logoutHandler = () =>{
    dispatch(logoutTeacher())
  }
  return (
    <>
      <div className="bottomNav">
        <div>
          <Link to="/" onClick={() => setRoot("/")}>
            <Button variant={root === "/" ? "outlined" : "text"}>
              {root === "/" ? (
                <HomeIcon color="primary" />
              ) : (
                <HomeOutlinedIcon color="primary" />
              )}
            </Button>
          </Link>

          <Link to="/students" onClick={() => setRoot("/students")}>
            <Button variant={root === "/students" ? "outlined" : "text"}>
              {root === "/students" ? (
                <PeopleAltIcon color="primary" />
              ) : (
                <PeopleOutlineOutlinedIcon color="primary" />
              )}
            </Button>
          </Link>

          <Link to="/me" onClick={() => setRoot("/me")}>
            <Button variant={root === "/me" ? "outlined" : "text"}>
              {root === "/me" ? (
                <PersonIcon color="primary" />
              ) : (
                <PermIdentityOutlinedIcon color="primary" />
              )}
            </Button>
          </Link>

          <Link to="/search" onClick={() => setRoot("/search")}>
            <Button variant={root === "/search" ? "outlined" : "text"}>
              <SearchIcon color="primary" />
            </Button>
          </Link>

          <Button onClick={() => setToggle(!toggle)}>
            <MenuOpenIcon />
          </Button>
        </div>
      </div>
      <>
        <div className={`SideBarCont${toggle ? "None" : ""}`}>
          <div>
            <ul>
              <li>
                <Link to="/" onClick={() => setRoot("/")}>
                  <HomeOutlinedIcon
                    sx={{ fontSize: 45, paddingRight: "10px" }}
                  />
                  Home
                </Link>
              </li>

              <li>
                <Link to="/me" onClick={() => setRoot("/me")}>
                  <PeopleOutlineOutlinedIcon
                    sx={{ fontSize: 45, paddingRight: "10px" }}
                  />
                  Profile
                </Link>
              </li>
              <li onClick={logoutHandler}>
                <Link>
                  <LogoutIcon sx={{ fontSize: 45, paddingRight: "10px" }} />
                  Logout
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <InfoIcon sx={{ fontSize: 45, paddingRight: "10px" }} />
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    </>
  );
}

export default BottomNavbar;
