import React from "react";
import "./About.scss";
import college from "../../../assests/collegeHome.svg";
import choose from "../../../assests/choose.svg";
import started from "../../../assests/started.svg";
import dev1 from "../../../assests/dev1.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Tilt } from "react-tilt";

const About = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <>
      <div className="aboutCont">
        <div>
          <p>About The Attendo College</p>
        </div>
        <div className="devCont">
          <Tilt options={defaultOptions} style={{ height: 400, width: 400 }}>
            <img src={dev1} alt={dev1} />
            <p>Anand Kumar</p>
            <div>
              <InstagramIcon sx={{ fontSize: 40 }} />
              <GitHubIcon sx={{ fontSize: 40 }} />
              <MailOutlineIcon sx={{ fontSize: 40 }} />
            </div>
          </Tilt>
          <Tilt options={defaultOptions} style={{ height: 400, width: 400 }}>
            <img src={dev1} alt={dev1} />
            <p>Anand Kumar</p>
            <div>
              <InstagramIcon sx={{ fontSize: 40 }} />
              <GitHubIcon sx={{ fontSize: 40 }} />
              <MailOutlineIcon sx={{ fontSize: 40 }} />
            </div>
          </Tilt>
          <Tilt options={defaultOptions} style={{ height: 400, width: 400 }}>
            <img src={dev1} alt={dev1} />
            <p>Anand Kumar</p>
            <div>
              <InstagramIcon sx={{ fontSize: 40 }} />
              <GitHubIcon sx={{ fontSize: 40 }} />
              <MailOutlineIcon sx={{ fontSize: 40 }} />
            </div>
          </Tilt>
          <Tilt options={defaultOptions} style={{ height: 400, width: 400 }}>
            <img src={dev1} alt={dev1} />
            <p>Anand Kumar</p>
            <div>
              <InstagramIcon sx={{ fontSize: 40 }} />
              <GitHubIcon sx={{ fontSize: 40 }} />
              <MailOutlineIcon sx={{ fontSize: 40 }} />
            </div>
          </Tilt>
        </div>
        <div>
          <img src={college} alt={college} />
          <p>
            Welcome to our College Attendance Web App, your all-in-one solution
            for efficient and organized attendance management. We understand the
            importance of tracking attendance, both for students' academic
            progress and instructors' teaching effectiveness. Our app simplifies
            this process, making it easier for everyone involved.
          </p>
        </div>
        <div>
          <img src={choose} alt={choose} />
          <div>
            <p>Why Choose Attendo College?</p>
            <p>
              Our college attendance web app stands out for its simplicity,
              reliability, and dedication to improving the educational
              experience. Whether you're a student, instructor, or
              administrator, we're here to make attendance management easier and
              more efficient.
            </p>
          </div>
        </div>
        <div>
          <img src={started} alt={started} />
          <div>
            <p>Get Started Today</p>
            <p>
              Ready to streamline attendance management and enhance the
              educational experience at your college? Sign up for Attendo
              College today and discover how our app can benefit you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
