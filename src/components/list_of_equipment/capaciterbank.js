import React from "react"
import Capbank1 from "../../images/capacitor 1.jpg";
import Capbank2 from "../../images/capacitor 2.jpg";
import Navbar from "../navbar"
import YouTubePlayer from "./YoutubePlayer";
function Capaciterbank() {
    return (
        <div className="main">
        <Navbar />
        <div className="title-container">
          <h3 className="card-title">Circuit Bank </h3>
        </div>
        <div className="container">
        <div className="notification-bar">
        <p>Please scroll to watch the information video regarding the given equipment.</p>
      </div>
          <div className="card-container">
            <div className="card">
              <img src={Capbank1} className="card-image" alt="logo" />
              <div className="card-content">
                <h3>Rating:</h3>
                <h5>100KVAR</h5> 
              </div>
            </div>
            <div className="card">
              <img src={Capbank2} className="card-image" alt="logo" />
              <div className="card-content">
                <h3 className="card-title">Reting:</h3>
                
                <h5>100KVAR</h5>
              </div>
            </div>
          </div>
          <div className="youtube-container">
            <YouTubePlayer videoId="9CxgySU7f6w" />
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

export default Capaciterbank