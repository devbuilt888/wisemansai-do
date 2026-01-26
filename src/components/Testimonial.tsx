import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "The WiseWay Solutions has consistently done a superb job with design and development throughout the process of launching a B2B website. Highly recommended for their professional services.",
    name: "Sarah Johnson",
    location: "New York, USA",
  },
  {
    quote:
      "Excellent communication and top-notch delivery. WiseWay Solutions helped us scale faster than expected.",
    name: "Michael Brown",
    location: "London, UK",
  },
  {
    quote:
      "Professional team with great attention to detail. Highly satisfied with the final product.",
    name: "Ayesha Khan",
    location: "Lahore, Pakistan",
  },
];

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <section className="home-testimonial-section">
        <h1 style={{color:'black', textAlign:'center'}}>Results That Speak</h1>
      <div
        className="testimonial-bg-map"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/worldMap.png)`,
        }}
      ></div>

      <div className="home-container">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <div className="testimonial-card">
                <p className="testimonial-quote">“{item.quote}”</p>

                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <span>👤</span>
                  </div>
                  <h4 className="testimonial-name">{item.name}</h4>
                  <p className="testimonial-location">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
