import Dropdown from 'react-bootstrap/Dropdown';
import { Outlet, Link } from "react-router-dom";
import React from "react"
import "./homepage/homepage.css"
import Dropdown_nav from './dropdown';

function Navbar() {
    return (
    <div class="navbar">
       <div class="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
               
        </div>
        {/* <div class="search">
            <input class="srch" type="search" name="" placeholder="Type To text"></input>
            <a href="/transformer"> <button class="btn">Search</button></a>
        </div> */}
        <Dropdown_nav />
    </div> 
        
    
    )
}

export default Navbar
