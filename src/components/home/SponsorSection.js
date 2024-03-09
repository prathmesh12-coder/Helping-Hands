import React from "react";
import Slider from "react-slick";

const SponsorSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="sponsor">
      <div className="container custom-border">
        <div className="row d-flex align-items-center justify-content-center custom-height">
          <div className="autoplay">
            <Slider {...settings}>
              <div className="img-container">
                <img src="../../assets/images/brand-1.png" alt="" />
              </div>
              <div className="img-container">
                <img src="../../assets/images/brand-2.png" alt="" />
              </div>
              <div className="img-container">
                <img src="../../assets/images/brand-3.png" alt="" />
              </div>
              <div className="img-container">
                <img src="../../assets/images/brand-4.png" alt="" />
              </div>
              <div className="img-container">
                <img src="../../assets/images/brand-5.png" alt="" />
              </div>
              <div className="img-container">
                <img src="../../assets/images/brand-6.png" alt="" />
              </div>
              <div className="img-container">
                <img src="../../assets/images/brand-2.png" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SponsorSection;
