import React from 'react';
import { NavLink } from 'react-router-dom';
import image from "../Image/about.png";
import banner from "../Image/banner.png";
import { FaBimobject } from "react-icons/fa";

const Home = () => {
    return (
        <div>
        <div className="row row-cols-1">

       
 <img src={banner} className="banner" alt="banner"/>

</div>
        <div className="container-fluid mt-3">
  
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-3 col-md-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      
        <br /><br /> <button className="home-button" ><NavLink style={{color:'white'}} to="/">click me</NavLink></button>
        </div>
      <div className="col-sm-9 col-md-6">
<img src={image} width="100%" height="300px" alt="home-img"/>  
    
</div>
    </div>
  </div>
</div>

<div className="container-fluid mt-3">
  <h2 style={{textAlign:"center", margin:"20px"}}>Our Services</h2>
  <div className="row">

    <div className="col bg-success" style={{padding:"20px 20px"}} >
    <center>   <FaBimobject className="icon-home" />
    </center><br />
   <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

   </span>
    </div>
    <div className="col bg-warning" style={{padding:"20px 20px"}}>
    <center>   <FaBimobject  />
    </center><br />
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </span>
    </div>
    
    <div className="col bg-success" style={{padding:"20px 20px"}}>
    <center>   <FaBimobject  />
    </center><br />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>


</div>

<div>
<center><h2>Source</h2></center><br/>


</div>


        </div>
    )
}

export default Home
