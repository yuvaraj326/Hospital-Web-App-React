import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import "./Testimonials.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials, SectionHead, Cards } from "./data";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const pervTestimonialHandler=()=>{
    setIndex(perv=> perv - 1)

    if(index <= 0)

    setIndex(testimonials.length -1);
    
  };
  const nextTestimonialHandler=()=>{
    setIndex(prev=> prev + 1);

    if(index >= testimonials.length -1){
      setIndex(0);
    }

  }


  return (
    <div className="div1" id="testimonialT">
      <section className="testimonials">
        <div className="container testimonials__container">
          <SectionHead
            icon={<ImQuotesLeft />}
            title="Testimonials"
            className="testimonials__head"
          />
          <Cards className="testimonial">

            <div className="testimonial__avatar">
              <img
                src={avatar}
                alt={name}
                style={{ width: "4rem", height: "4rem" }}
              />
            </div>
            <div className="testi">
              <p className="testimonai_quote">{`"${quote}"`}</p>
              <h4>{name}</h4>
              <small className="testimonial__title">{job}</small>
            </div>
          </Cards>
          <div className="testimonials__btn-container">
            <button className="testimonials__btn" onClick={pervTestimonialHandler}>
              <IoIosArrowDropleftCircle />
            </button>
            <button className="testimonials__btn" onClick={nextTestimonialHandler}>
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
