import React from "react";
import { useLocation } from "react-router-dom";

import CustomNav from "./CustomNav";
import MainSlider from "./MainSlider";
import Jumbotron from "./Jumbotron";

function Header() {
  const location = useLocation();
  const href = window.location.href;
  console.log("href ", href);
  // console.log('location ', location.pathname);
  return (
    <header className="position-relative">
      <CustomNav location={location}/>
      {location.pathname === "/" && (
        <MainSlider />
      ) }
    </header>
  );
}

export default Header;
