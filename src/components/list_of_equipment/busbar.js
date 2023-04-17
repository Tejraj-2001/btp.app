import React from "react";
import Bus_bar1 from "../../images/Busbar1.jpg";
import Bus_bar2 from "../../images/Busbar2.jpg";
import Navbar from "../navbar";
import "./busbar.css";
import YouTubePlayer from "./YoutubePlayer";

function Busbar() {
  return (
    <div className="main">
      <Navbar />
      
      <div className="title-container">
        <h3 className="card-title">Bus bar </h3>
      </div>
      
      <div className="container">
      <div className="notification-bar">
        <p>Please scroll to watch the information video regarding the given equipment.</p>
      </div>
        <div className="card-container">
          <div className="card">
            <img src={Bus_bar1} className="card-image" alt="logo" />
            <div className="card-content">
              <h3>Rating:-</h3>
              <h5>For 33KV HT panel</h5>
              630A, 33KV, 50Hz, TP CU, BusBar
              <br />
              <br />
              <h5>For 11KV HT main panel</h5>
              630A, 11KV, 50Hz, TP CU, BusBar
              <br />
              <br />
              
              
            </div>
          </div>
          <div className="card">
            <img src={Bus_bar2} className="card-image" alt="logo" />
            <div className="card-content">
              <h3 className="card-title">Rating:-</h3>
              
              <h5>For 11KV HT main panel</h5>
              630A, 11KV, 50Hz, TP CU, BusBar
              <br />
              <br />
              <h5>For Emergency panel</h5>
              600A,415V,50Hz TPN AI. BUSBAR
              
            </div>
          </div>
        </div>
        <div className="youtube-container">
          <YouTubePlayer videoId="CXcahAFaLaA" />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div></div>
      </div>
    </div>
  );
}

export default Busbar;
