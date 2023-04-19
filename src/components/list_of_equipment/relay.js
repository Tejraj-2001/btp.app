import React from "react"
import R1 from "../../images/relay.png";
// import R2 from "../../images/relay.png";

import Navbar from "../navbar"
import YouTubePlayer from "./YoutubePlayer";
function Relay() {
    return (
        <div className="main">
        <Navbar />
        <div className="title-container">
          <h3 className="card-title">Relay </h3>
        </div>
        <div className="container">
          <div className="card-container">
            <div className="card">
              <img src={R1} className="card-image" alt="logo" />
              <div className="card-content">
                <h3>Rating:</h3>
                <h5>For 33KV HT panel</h5>
               
                
                
              </div>
            </div>
            <div className="card">
              <img src={R1} className="card-image" alt="logo" />
              <div className="card-content">
                <h3 className="card-title">Ratings:-</h3>
                
                
              </div>
            </div>
          </div>
          <div className="youtube-container">
            <YouTubePlayer videoId="mCi0PuLyUcw" />
          </div>
          <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div></div>
        </div>
      </div>
    )
}

export default Relay
