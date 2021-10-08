import React from 'react'
import { NavLink } from 'react-router-dom'

const Content = () => {
    return (
        <>
<div className="row-new">
        <div className="row">
  <div className="column" >
  <div className="col1-bg">
    <h2>Our Services</h2>
    <p>It is a long established fact that a reader will be distracted by the
     readable content of a page when looking at its layout. 
     The point of using Lorem Ipsum is that it has a more-or-less normal 
     distribution of letters, as opposed to using 'Content here, content here', 
     making it look like readable English.
     
     <br />
     <br />
     
     It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
     <br/>
     <br />

    </p>
    <div className="banner-btns">

    <NavLink to="/about" className="button-btn">KNOW MORE</NavLink>
</div>

    </div>
    
  </div>
  <div className="column">
  <div className="col-bg"></div>
   
  </div>
</div></div>
            
        </>
    )
}

export default Content
