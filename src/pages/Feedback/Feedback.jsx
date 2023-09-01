import React from "react";
import "./Feedback.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

export default function Feedback() {
  const year=new Date();
  return (
    <div id="footer">
        {/* <nav className="navbar navbar-expand-lg bg-primary ">
          <br />
          <br></br>
        </nav> */}
      <footer>
        <h5 className="logo">Footer</h5>

        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <br />
          <li>
            <a href="/home">Appointment</a>
          </li>
          <br />
          <li>
            <a href="/admin">Admin</a>
          </li>
          <br />
          <li>
            <a href="/about">About</a>
          </li>
          <br />
          <li>
            <a href="/contact">Contact As</a>
          </li>
          <br />
        </ul>

        <div className="social">
          <a href="https://www.instagram.com/yuvi_vx/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100008717234902"
            target="_blank"
            rel="noreferrer" 
          >
            <CiFacebook />
          </a>
          <a href="mailto:yuvivx92@gmail.com" target="_blank" rel="noreferrer">
            <AiOutlineTwitter />
          </a>
        </div>

        <div className="copyrights">
          <small>Copyright &copy; {year.getFullYear()} <b>Yuvaraj. </b> All Rights Resered. </small>
        </div>
      </footer>
    </div>
  );
}
