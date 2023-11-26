import React from "react";
import "./Home.scss";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import EastIcon from "@mui/icons-material/East";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import TrackVisibility from "react-on-screen";
import founder from '../../assests/dev1.jpg'

const Home = () => {
  return (
    <>
      <div className="HomeCont">
        <div>
          <p>Complete Your Attendence with</p>
          <p>Attendo College</p>
        </div>
        <div>
          <div className="HomeCard animate__animated animate__bounceInLeft">
            <Diversity1Icon sx={{ fontSize: 40 }} />
            <p>User Friendly</p>
          </div>

          <div className="HomeCard animate__animated animate__bounceInLeft">
            <PhonelinkLockIcon sx={{ fontSize: 40 }} />
            <p>Secure</p>
          </div>

          <div className="HomeCard animate__animated animate__bounceInLeft">
            <MobileFriendlyIcon sx={{ fontSize: 40 }} />
            <p style={{ fontSize: 25 }}>Mobile Supported</p>
          </div>

          <div className="HomeCard animate__animated animate__bounceInLeft">
            <AppShortcutIcon sx={{ fontSize: 40 }} />
            <p style={{ fontSize: 20 }}>Real Time Monitoring</p>
          </div>
        </div>
        <div>
          <div>
            <hr />
          </div>
          <div>Features</div>
          <div>
            <hr />
          </div>
        </div>
        <div>
          <div>
            <TrackVisibility>
              {({ isVisible }) => (
                <ul className={`${isVisible ? 'animate__animated animate__fadeInDown' : ''} homeList`}>
                  <li>
                    <EastIcon />
                    Easy to use
                  </li>
                  <li>
                    <EastIcon />
                    Safe and secure
                  </li>
                  <li>
                    <EastIcon />
                    User Friendly
                  </li>
                  <li>
                    <EastIcon />
                    Easy to maintain
                  </li>
                </ul>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
