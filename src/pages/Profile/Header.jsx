import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import index from "./index.jpg";
// import mobile from "./mobile.png";

const Header = () => {
    
  return (
    <header className="main__header"  >
      <div className="container main__header-container">
        <div className="main__header-left">
          <h2>
            <b>Your New Smile <br/>Start Here</b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
            quam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            enim.
          </p>
          <Link to="/appointment" className="btn sm">
            Get Appointment
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-image">
            {/* <img src={mobile} alt="index" className="img" /> */}
            <img src={index} alt="index" className="img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
