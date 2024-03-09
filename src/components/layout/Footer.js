import React from "react";
import { useNavigate } from "react-router-dom";


const Footer = () => {

  const navigate = useNavigate()
  
  const handleEmailClick = () => {
    window.location.href = "mailto:helpinghandsorg711@gmail.com";
  };
  const handlePhoneClick = () => {
    window.location.href = "tel:+911245367778";
  };

  const handlePayment = () => {
    navigate("/donateus")
  }

  const handleEmailClickEvent = () => {
    const encodedSubject = encodeURIComponent("To inform about a new event and its details");
    window.location.href = `mailto:helpinghandsorg711@gmail.com?subject=${encodedSubject}`;
  };
const handleEmailClickCampaign = () => {
  const encodedSubject = encodeURIComponent("To inform about a new campaign and its details");
  window.location.href = `mailto:helpinghandsorg711@gmail.com?subject=${encodedSubject}`;
};
const handleEmailClickArticle = () => {
  const encodedSubject = encodeURIComponent("To inform about a new article and its details");
  window.location.href = `mailto:helpinghandsorg711@gmail.com?subject=${encodedSubject}`;
};
  return (
    <footer id="footer" className="mt-5">
    
      <div className="container-fluid footer-background d-flex align-items-center justify-content-center">
      
        <div className="container mt-md-5">
          <div className="row footer-content">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="donate">
                <h3 className="mb-4 mt-5 mt-md-0">
                  Your Actions can Transform the Future of Humanity
                </h3>
                <button className="rounded-pill p-2 donate-now">
                  <span className="d-flex align-items-center justify-content-center">
                    <span className="icon-container d-flex align-items-center justify-content-center me-3">
                      <i className="fa-solid fa-heart"></i>
                    </span>
                    <span onClick={handlePayment} className="text-container" style={{color:"white"}}> donate now</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mb-4">
              <div className="links">
                <h4>Feel free to inform us about</h4>
                <ul className="p-0">
                  <li onClick={handleEmailClickEvent} style={{ cursor: "pointer" }}> Events</li>
                  <li onClick={handleEmailClickCampaign} style={{ cursor: "pointer" }}>Campaign</li>
                  <li onClick={handleEmailClickArticle} style={{ cursor: "pointer" }}> Article</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mb-4">
              <div className="non-profit">
                <h4>Non Profit</h4>
                <ul className="p-0">
                  <li>Feed the Childerens</li>
                  <li>Medical Camp</li>
                  <li>Leukemia & Lymphoma Society</li>
                  <li>Wildfire</li>
                  <li>Start Fundraising</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact">
                <h4>Contact</h4>
                <ul className="p-0">
                <li onClick={handleEmailClick} style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-envelope"></i>
              helpinghandsorg711@gmail.com
            </li>
            <li onClick={handlePhoneClick} style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-phone"></i> +91 1245367778
            </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    Building 23, Ahmamau , Lucknow
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
