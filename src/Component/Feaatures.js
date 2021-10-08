import React from 'react'
import Feature from './Feature';
import images from "../Image/new.png"

const Feaatures = () => {
    return (
        <div>
            <Feature img={images} title="WeightLifting" desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."/>
        </div>
    )
}

export default Feaatures
