import React from "react";
import "./About.css";
import photo1 from '../../images/photo_2023-08-03_13-29-33.jpg';
import photo2 from "../../images/photo_2023-08-03_13-29-45.jpg";
import photo3 from "../../images/photo_2023-08-03_13-30-23.jpg";


export default function About() {
  // const styl = { width: "100%" };
  return (
    <header id="about" >
      
        <nav className="navbar navbar-expand-lg navbar-transparent ">
          <br />
          <br></br>
        </nav>
      <div className="container" >
        <h4>
          {" "}
          <b>OUR SERVICES</b>
        </h4>
        <h1>
          <b>Services We Provide</b>
        </h1>
      </div>
      <div className="par">
        <div className="child1">
          <img src={photo1} alt="sql" />
          <h4 className="hf">MySql Database</h4>
          <p><br></br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
            veritatis reprehenderit dolorem ex? Repellat, odio?
          </p>
        </div>
        <div className="child1">
          <img src={photo3} alt="java" />
          <h4>Java</h4>
          <p>
          <br/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ab
            pariatur reprehenderit incidunt rem voluptatem.
          </p>
        </div>
        <div className="child1">
          <img src={photo2} alt="react" />
          <h4>React JS</h4>
          <p>
          <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id libero
            dignissimos placeat. Itaque, pariatur repudiandae.
          </p>
        </div>
      </div>
    </header>
  );
}
