import React from 'react';
import image from "../Image/logo.png"
import { NavLink } from 'react-router-dom';
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillEnvironment } from "react-icons/ai";


const Footer = () => {
    return (
        <>
        <div className="row">
        <div className="col-ne">
  <div className="column" >
<img src={image} alt="image"/>  <br /> <br />
 <p style={{color:'white', textAlign:'justify'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.

 </p>
  </div></div>

  <div className="col-ne">
 <div className="column" >
    <h2 style={{color:'white', fontSize:'20px'}}>OUR SERVICES </h2><br />
    <NavLink to="/home">Home</NavLink><br />
    <NavLink to="/about">About</NavLink><br />
    <NavLink to="/contact">Contact</NavLink>
  </div></div>

  <div className="col-ne">
<div className="column" >
    <h2 style={{color:'white', fontSize:'20px'}}>OUR FEATURES</h2><br />
    <p style={{color:'white' , fontSize:'15px'}}>WeightLifting    </p>
    <p style={{color:'white' , fontSize:'15px'}}>Lifting    </p>
    <p style={{color:'white' , fontSize:'15px'}}>WeightLifting    </p>
    <p style={{color:'white' , fontSize:'15px'}}>Lifting    </p>
    <p style={{color:'white' , fontSize:'15px'}}>WeightLifting    </p>
  </div></div>

  <div className="col-ne">
  <div className="column" >
    <h2 style={{color:'white', fontSize:'20px'}}>CONTACT US</h2><br />
    <p style={{color:'white'}}><AiFillPhone style={{color:'white'}} /> +91-4653146513</p>
    <p style={{color:'white'}}><AiFillMail style={{color:'white'}} /> xyz@gmail.com</p>
    <p style={{color:'white'}}><AiFillEnvironment style={{color:'white'}} /> India</p>
  </div></div>
</div>   
        
        </>
    )
}

export default Footer
