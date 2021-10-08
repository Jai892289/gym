import React from 'react'

const Form = () => {
    return (
        <div className="contact">
        <h3><b>Enquiry Us</b></h3><br />
        <h4>Name</h4>
        <input type="text" placeholder="Enter Your Name" /><br /><br />

        <h4>Email</h4>
        <input type="email" placeholder="Enter Your Email" /><br/><br/>
        

        <h4>Contact No</h4>
        <input type="number" placeholder="Enter Your Number" /><br /><br />

        <h4>Message</h4>
        <input type="description" placeholder="Enter Your Message" />
       <br /><br />
       <button className="contact-btn">SUBMIT</button>
        </div>
    )
}

export default Form
