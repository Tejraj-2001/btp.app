
import React from "react";
import Transformer1 from "../../images/Transformer1.jpg";
import Transformer2 from "../../images/Transformer2.jpg";
import Navbar from "../navbar";
import "./busbar.css";
import YouTubePlayer from "./YoutubePlayer";

function Transformer() {
  return (
    <div className="main">
      <Navbar />
      <div className="title-container">
        <h3 className="card-title">Transformer </h3>
      </div>
      <div className="container">
      <div className="notification-bar">
        <p>Please scroll to watch the information video regarding the given equipment.</p>
      </div>
        <div className="card-container">
          <div className="card">
            <img src={Transformer1} className="card-image" alt="logo" />
            <div className="card-content">
              <h3>Rating:-</h3>
              <h5>At Level-1:</h5>
               5MVA, 33KV/11KV ONAN OLTC
              
            </div>
          </div>
          <div className="card">
            <img src={Transformer2} className="card-image" alt="logo" />
            <div className="card-content">
              <h3 className="card-title">Reting:-</h3>
              
              <h5>At Level-2:</h5>
               500KVA, 11KV/433V ONAN OLTC
            </div>
          </div>
        </div>
        <div className="youtube-container">
          <YouTubePlayer videoId="oYZH3rMsl0k" />
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

export default Transformer;
