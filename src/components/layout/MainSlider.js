import React from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="custom-prev arrow-button d-flex align-items-center justify-content-center"
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick, customProps, customClasses } = props;
  console.log("props ", props);
  return (
    <div
      className={customClasses}
      style={{ ...style, ...customProps }}
      onClick={onClick}
    >
      <i className="fa-solid fa-angle-right"></i>
    </div>
  );
}
const MainSlider = () => {
  const location = window.location.href;
  console.log("location ", location);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow  customProps={{color: 'red'}}/>,
    nextArrow: (
      <SampleNextArrow
        customProps={{ color: "red" }}
        customClasses="custom-next arrow-button d-flex align-items-center justify-content-center"
        
      />
    ),
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="main-slider">
      <div className="single-carousel">
        <Slider {...settings}>
          <div className="slider-container position-relative">
            <img
              src={'../../assets/images/flood.jpg'}
              alt=""
              className="full-height"
            />
            <div className="content-action">
              <h1 className="custom-header-lg">
                Climate Change, Global Threat
              </h1>
              <p className="custom-para mb-3">
              Climate change is not just an environmental issue, but a human issue, affecting health, security, and economic well-being.
              </p>
              {/* <button className="btn action-btn rounded-pill px-md-5 py-md-3 px-sm-3 py-sm-1">
                Discover More
              </button> */}
            </div>
          </div>
          <div className="slider-container position-relative">
            <img
              src="../../assets/images/pollution.jpg"
              alt=""
              className="full-height"
            />
            <div className="content-action">
              <h1 className="custom-header-lg">
                Ocean Pollution, Climate Change
              </h1>
              <p className="custom-para mb-3">
              The health of our oceans is inextricably linked to the health of our planet, and pollution and climate change are threatening
              </p>
              {/* <button className="btn action-btn rounded-pill px-md-5 py-md-3 px-sm-3 py-sm-1">
                Discover More
              </button> */}
            </div>
          </div>
          <div className="slider-container position-relative">
            <img
              src="../../assets/images/sadiq-nafee-nrnd1-fTsdQ-unsplash.jpg"
              alt=""
              className="full-height"
            />
            <div className="content-action">
              <h1 className="custom-header-lg">We rise by <br></br> lifting others.</h1>
              <p className="custom-para mb-3">
              We can create a better world for ourselves and future generations by lifting others up and working together towards common goals.
              </p>
              {/* <button className="btn action-btn rounded-pill px-md-5 py-md-3 px-sm-3 py-sm-1">
                Discover More
              </button> */}
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default MainSlider;
