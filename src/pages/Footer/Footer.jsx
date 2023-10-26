import React from 'react'
import './Footer.css'
import Doclogo from "../../images/footerlogo.png";


function Footer() {
  return (

    <div className="footer">
    <div className="heading">
        <h2>hospital-WebApp<sup> <img style={{height:"3rem" ,width:"3rem" }} src={Doclogo} alt="ewf"  />  </sup></h2>
    </div>
    <div className="content">
        {/* <!--service section--> */}
        <div className="services">
            <h4> <b>Services</b></h4>
            <p><a href="#about" target="_self" >Amblance</a></p>
            <p><a href="#about" target="_self" >Medical Pharmacy</a></p>
            <p><a href="#about" target="_self" >Wheelchairs</a></p>
            <p><a href="#about" target="_self" >24/7 Services</a></p>
        </div>

        {/* <!--Social media section--> */}
        <div className="social-media">
            <h4><b>Social</b></h4>
            <p><a href="https://www.linkedin.com/in/yuvaraj-vx31" target='_blank' rel="noreferrer">Linkedin</a></p>
            <p><a href="https://www.twitter.com/" target='_blank' rel="noreferrer">Twitter</a></p>
            <p><a href="https://github.com/yuvaraj326/Hospital-Web-App.git" target='_blank' rel="noreferrer">Github</a></p>
            <p><a href=" https://www.facebook.com/"
            target="_blank"
            rel="noreferrer">Instagram</a></p>
            <p><a href="https://www.youtube.com/" target='_blank' rel="noreferrer" >Youtube</a></p>
        </div>
        {/* <!--navigation links--> */}
        <div className="links">
            <h4><b>Quick Links</b></h4>
            <p><a href="/">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#testimonialT">Blogs</a></p>
            <p><a href="#contactL">Contact</a></p>
        </div>
        <div className="details">
            <h4 className="address"><b>Address</b></h4>
            <p>Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. In, assumenda.

            </p>
            <h4 className="mobile"><b>Mobile</b></h4>
            <p><a href="https://web.whatsapp.com/">+91-9894****48</a></p>
            <h4 className="mail"><b>Email</b></h4>
            <p><a href="mailto:yuvivx92@gmail.com" target="_blank" rel="noreferrer">yuvivx92@gmail.com</a></p>
        </div>
    </div>
    <footer>
        <hr/>
        Copyright &copy; 2023 <b>Yuvaraj. </b> All Rights Resered. 
    </footer>
</div>

    )
}

export default Footer