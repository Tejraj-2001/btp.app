// import { Outlet, Link } from "react-router-dom";
import React from "react"
import "./homepage.css"
import Substation from "../../images/substation.jpg";
import Navbar from "../navbar"

const Homepage = ({setLoginUser}) => {
    return (
        
    <div class="main">
        <Navbar />
        
       <h3 class="heading">Sub Station</h3>
      <div class="imgg"><img src={Substation} alt="logo" /></div> 
      <br></br>
      <br></br>
       <div class="main_content">
        <h3>Introduction</h3>
      <div> A substation is a crucial part of an electrical power system that acts as a hub for the transmission and distribution of electrical power. It is a facility that transforms high voltage power into low voltage power, distributes it to consumers, and protects the power system from power surges and other hazards.</div>

<div>The primary function of a substation is to receive high-voltage electrical power from the generating station or transmission lines and reduce it to a lower voltage level that can be distributed to consumers. This is accomplished through a series of transformers that step down the voltage to an appropriate level for distribution.</div>

<div>Substations also include equipment such as circuit breakers, switches, and protective relays that help ensure the safe and reliable operation of the power system. Circuit breakers are used to interrupt the flow of electrical current in the event of a fault or overload, while switches are used to control the flow of power to different parts of the system. Protective relays are used to detect abnormal conditions and initiate protective actions to prevent damage to the power system.</div>

<div>Substations can be classified into various types based on their function, voltage level, and location. For instance, step-up substations are located near the generating station and step up the voltage of the power to be transmitted over long distances. Distribution substations, on the other hand, are located near the consumers and step down the voltage for distribution to homes and businesses.</div>

<div>In summary, a substation is a critical component of an electrical power system that helps ensure the safe and reliable distribution of electrical power to consumers.</div>
      <br />
      
       <h3>List of Equipments</h3>
       <ol>
         <li><Link to="/transformer">Transformer</Link></li>
         <li><Link to="/busbar">Bus Bar</Link></li>
         <li><Link to="/relay">Relay</Link></li>
         <li><Link to="/circuitbreaker">Circuit Breaker</Link></li>
         <li><Link to="/capaciterbank">Capaciter Bank</Link></li>
       </ol> 
       </div>
    </div> 
        
    
    )
}

export default Homepage
