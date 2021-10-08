import React from 'react';
import Footer from "./Footer";
import image from "../Image/contact.jpg";
import Form from "./Form";

const Contact = () => {
    return (
        <div>
        <img src={image} alt="image" width="100%" height="500px"/>
<Form />
            <Footer />
        </div>
    )
}

export default Contact
