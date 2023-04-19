import React from "react"
import CB1 from "../../images/circuit breaker 1.jpg";
import CB2 from "../../images/circuit breaker 2.jpg";
import Navbar from "../navbar"
import YouTubePlayer from "./YoutubePlayer";
function Circuitbreaker() {
    return (
        <div className="main">
        <Navbar />
        <div className="title-container">
          <h3 className="card-title">Circuit Breakers </h3>
        </div>
        <div className="container">
        <div className="notification-bar">
        <p>Please scroll to watch the information video regarding the given equipment.</p>
      </div>
          <div className="card-container">
            <div className="card">
              <img src={CB1} className="card-image" alt="logo" />
              <div className="card-content">
                <h3>Rating in Amps:-</h3>
                <h5>Non-Emergency Panel</h5>
                1000A FP MDO ACB.
                <br></br>
                At Feeder end:-
                630A/300A/160A/63A FP MCCB.
                <br />
                <br />
              </div>
            </div>
            <div className="card">
              <img src={CB2} className="card-image" alt="logo" />
              <div className="card-content">
                <h3 className="card-title">Ratings in Amps:-</h3>
                
                <h5>Emergency Panel</h5>
                630A FP MCCB.
                <br></br>
                At Feeder end:-
                200A/160A/100A/63A FP MCCB.
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="youtube-container">
            <YouTubePlayer videoId="uQpOWD6sM-c" />
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

export default Circuitbreaker
