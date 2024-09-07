import React from "react";
import "../styles/Home.css";
import monster from "../assets/optin-monster.png";
import img1 from "../assets/i1.png";
import background from "../assets/background.png";

const Home = () => {
  return (
    <div className="home-container">
      <img id="monster" src={monster} alt="Optin Monster" />
      <div className="text-container">
        <h1 id="title">ULTIMATE GUIDE</h1>
        <h2 id="text">
          Best Website Builder <br /> for Small Business
        </h2>
      </div>
      <img id="img1" src={img1} alt="Image 1" />
      <img id="bg" src={background} alt="Background" />
    </div>
  );
};

export default Home;
