import React from 'react';

const SocialIconsContainer = ({ page }) => {

    const handleIconClick = (url) => {
        window.open(url, "_blank");
    }

    return (
        <div className="info-card-container d-flex align-items-center justify-content-center p-5">
            <div className="info-card-content d-flex flex-column align-items-center">
                <h4 className="mb-3">Share {page}</h4>
                <div className="social-icons d-flex align-items-center">
                    <div className="icon-container d-flex align-items-center justify-content-center me-3"
                         onClick={() => handleIconClick('https://twitter.com')}>
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="icon-container d-flex align-items-center justify-content-center me-3"
                         onClick={() => handleIconClick('https://facebook.com')}>
                        <i className="fab fa-facebook"></i>
                    </div>
                    <div className="icon-container d-flex align-items-center justify-content-center me-3"
                         onClick={() => handleIconClick('https://instagram.com')}>
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="icon-container d-flex align-items-center justify-content-center me-3"
                         onClick={() => handleIconClick('https://twitch.tv')}>
                        <i className="fab fa-twitch"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SocialIconsContainer;
 