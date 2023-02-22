import React from "react";
import "../assets/styles/navbar.css";
import tindevLogo from "../assets/images/Logoseul.PNG";
import tindevTitle from "../assets/images/Titre.PNG";


function Navbar(props) {


  return (
    <>
    <div className="container">
      <img src={tindevLogo} alt="logo tindev" />
      <h1>{props.h1}</h1>
      <img className="title" src={tindevTitle} alt="logo tindev" />
    </div>
    </>
  );
}

export default Navbar;
