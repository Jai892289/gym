import React from 'react'

const Feature = (props) => {
    return (

        <div className="sec-new">
            <h2 className="feature-col">FEATURES</h2>

            <div class="container-fluid">

                <div class="row">

                    <div class="col-sm-4" >

                        <img src={props.img} /><br /><br/>

                        <h3>{props.title}</h3><br />
                        <p>{props.desc}</p>


                    </div>
                    <div class="col-sm-4" >

                        <img src={props.img} /><br /><br/>

                        <h3>{props.title}</h3><br />
                        <p>{props.desc}</p>

                    </div>
                    <div class="col-sm-4" >

                        <img src={props.img} /><br /><br/>

                        <h3>{props.title}</h3><br />
                        <p>{props.desc}</p>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Feature
