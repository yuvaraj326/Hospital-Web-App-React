import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5owu515",
      "template_h8p1zdh",
      form.current,
      "tTOOauINZU1PFZ5fh"
    );
    e.target.reset();
  };

  return (
    <div id="contactL" >
      {/* <nav className="navbar navbar-expand-lg bg-primary ">
        <br />
        <br></br>
      </nav> */}
      <section id="prbg">
        <section id="contact">
          <h5>
            <b>Get In Touch</b>
          </h5>
          <h1>
            <b>Contact Us</b>
          </h1>
        </section>

        <div className="contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <div className="as">
              < MdOutlineMail />
              </div>
              <h4>Email</h4>
              <h5>yuvivx92gmail.com</h5>
              <a href="mailto:yuvivx92@gmail.com" target="_blank" rel="noreferrer">
                Send Message
              </a>
            </article>
            <article className="contact_option">
            <div className="as">
              <FaInstagram />
              </div>
              <h4>Instagram</h4>
              <h5>yuvi_vx</h5>
              {/* hari    <a href="https://www.instagram.com/direct/t/105728114158114/" target="_blank"> */}
              <a
                href="https://www.instagram.com/direct/t/118003566253081/"
                target="_blank"
                rel="noreferrer"
              >
                Send Message
              </a>
            </article>
            <article className="contact_option">
            <div className="as">
              <BsWhatsapp />
              </div>
              <h4>Whatsapp</h4>
              <h5>+91 9894961346</h5>
              <a
                href="https://m.me/profile.php?id=100008717234902"
                target="_blank"
                rel="noreferrer"
              >
                Send Message
              </a>
            </article>
          </div>
          {/* end of the contact option  */}
          <form className="contactform" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Enter the Name"
              autoComplete="on"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              autoComplete="on"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            />
            <button
              style={{ width: "150px" }}
              type="submit"
              className="btn btn-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
