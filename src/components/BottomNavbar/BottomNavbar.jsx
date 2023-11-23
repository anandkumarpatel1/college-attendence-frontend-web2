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


import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadTeacher, logoutTeacher } from "../../action/Teacher";
import Cookies from "js-cookie";
function BottomNavbar() {
  const [root, setRoot] = useState(window.location.pathname);
  const [toggle, setToggle] = useState(true);

  const dispatch = useDispatch()
  const navigate =  useNavigate()

  const navHandler = () =>{
    if(toggle){
      setToggle(false)
    } else{
      setToggle(true)
    }
  }

  const homeHandler = () => {
    setRoot("/")
    setToggle(true)
  }

  const meHandler = () =>{
    setRoot("/me")
    setToggle(true)
  }

  const searchHandler = () =>{
    setRoot("/search")
    setToggle(true)
  }

  const aboutHandler = () =>{
    setRoot('/about')
    setToggle(true)
  }

  const allStuHandler = () =>{
    setRoot('/allstudents')
    setToggle(true)
  }

  const studentHandler = () =>{
    setRoot('/students')
    setToggle(true)
  }

  const logoutHandler = () =>{
    // Cookies.remove('name', { path: '/' })
    dispatch(logoutTeacher())
    setToggle(true)
    navigate('/login')
  }
  return (
    <>
      <div className="bottomNav">
        <div>
          <Link to="/" onClick={homeHandler}>
            <Button variant={root === "/" ? "outlined" : "text"}>
              {root === "/" ? (
                <HomeIcon color="primary" />
              ) : (
                <HomeOutlinedIcon color="primary" />
              )}
            </Button>
          </Link>

          <Link to="/students" onClick={studentHandler}>
            <Button variant={root === "/students" ? "outlined" : "text"}>
              {root === "/students" ? (
                <PeopleAltIcon color="primary" />
              ) : (
                <PeopleOutlineOutlinedIcon color="primary" />
              )}
            </Button>
          </Link>

          <Link to="/me" onClick={meHandler}>
            <Button variant={root === "/me" ? "outlined" : "text"}>
              {root === "/me" ? (
                <PersonIcon color="primary" />
              ) : (
                <PermIdentityOutlinedIcon color="primary" />
              )}
            </Button>
          </Link>

          <Link to="/search" onClick={searchHandler}>
            <Button variant={root === "/search" ? "outlined" : "text"}>
              <SearchIcon color="primary" />
            </Button>
          </Link>

          <Button onClick={navHandler}>
            <MenuOpenIcon />
          </Button>
        </div>
      </div>
      <>
        <div className={`SideBarCont${toggle ? "None" : ""}`}>
          <div>
            <ul>
              <li>
                <Link to="/" onClick={homeHandler}>
                  <HomeOutlinedIcon
                    sx={{ fontSize: 45, paddingRight: "10px" }}
                  />
                  Home
                </Link>
              </li>

              <li>
                <Link to="/me" onClick={meHandler}>
                  <PermIdentityOutlinedIcon
                    sx={{ fontSize: 45, paddingRight: "10px" }}
                  />
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/allstudents" onClick={allStuHandler}>
                  <PeopleOutlineOutlinedIcon
                    sx={{ fontSize: 45, paddingRight: "10px" }}
                  />
                  Students
                </Link>
              </li>
              <li onClick={logoutHandler}>
                <Link>
                  <LogoutIcon sx={{ fontSize: 45, paddingRight: "10px" }} />
                  Logout
                </Link>
              </li>
              <li onClick={aboutHandler}>
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
