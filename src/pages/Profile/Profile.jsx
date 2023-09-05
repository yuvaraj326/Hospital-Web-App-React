import React from "react";
import Header from "./Header";
import About from "../About/About";
import Testimonials from "../Testimonials/Testimonials";
import Contact from '../Contact us/Contact';
// import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";

export default function Profile() {
  // const styl = { width: "100%" };
  return (
    <div id="#">
      <div className="img">
        {/* <img style={styl} src={Appointment} alt="img" /> */}
        <Header />
        <About/>
        <Testimonials/>
        <Contact/>
        {/* <Feedback /> */}
        <Footer/>

      </div>
      
    </div>
  );
}
