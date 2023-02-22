import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
// import Footer from "../components/Footer";
import "../assets/styles/HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <NavBar />
      <div className="HomePageButton">
        <Link to="./registerRecruteur">
          <button>Vous êtes recruteur</button>
        </Link>
        <Link to="./registerDeveloppeur">
          <button>Vous êtes développeur</button>
        </Link>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
