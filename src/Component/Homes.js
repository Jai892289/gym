import React from 'react'
import Feaatures from './Feaatures';
import Content from "./Content";
import Subscribe from './Subscribe';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
const Homes = () => {
    return (
       <> <div className="banner">
        <div className="center">
            <h2>STEP UP YOUR</h2>
            <h1> <span>FITNESS</span> WITH US</h1>
        </div>
        <div className="banner-btn"></div>
        <NavLink to="/contact" className="bnnr-btn">KNOW MORE</NavLink>
        </div>
        <Feaatures />
        <Content />
        <Subscribe />
        <Footer />

</>

    )
}

export default Homes
