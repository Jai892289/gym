import React from 'react';
import Footer from "./Footer";
import Feaatures from './Feaatures';
import image from "../Image/offer.png";


const About = () => {
    return (
        <div>
        <img src={image} alt="image" width="100%" height="600px"/>
        <Feaatures />
<Footer />
        </div>
    )
}

export default About
