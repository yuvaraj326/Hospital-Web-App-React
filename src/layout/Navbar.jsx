import React from "react";
import { Link } from "react-router-dom";
import doclogo from "../images/doclogo1.png";

export default function Navbar() {
  const styl = { width: "90px", height: "90px" };
  return (
    <div>
      <div
        className="navbar navbar-expand-lg navbar-transparent "
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <div className="container-fluid fs-5 font-monospace  ">
          <Link className="navbar-brand ms-5 " to="/">
            <img style={styl} src={doclogo} alt="logo" />
          </Link>

          <div
            className="collapse navbar-collapse justify-content-end mb-5"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav  ">
              <Link className="nav-link active ms-2  " to="/">
                Home
              </Link>
              <Link
                className="nav-link active ms-2"
                aria-current="page"
                to="/appointment"
              >
                Appointment
              </Link>
              <Link
                className="nav-link active ms-2 "
                aria-current="page"
                to="/login"
              >
                Admin
              </Link>

              <a href="#about" className="nav-link active ms-2 text-white-50">
                About
              </a>
              <a href="#testimonialT" className="nav-link active ms-2 text-white-50">
              Testimonial
              </a>
              <a
                className="nav-link active ms-2 text-white-50 "
                href="#contactL"
              >
                Contact us
              </a>
              {/* <a
                className="nav-link active ms-2 text-white-50"
                aria-current="page"
                href="#footer"
              >
                Feedback
              </a>*/}
              {/* <Link className="nav-link active ms-2" aria-current="page"></Link>  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
