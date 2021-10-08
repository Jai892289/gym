import React from 'react'


const Comp = (props) => {
    return (
        <div>
<h2 style={{textAlign:"center", margin:"20px"}}>Contact Us</h2>

<div class="card" style={{width:"400px"}}>
    <img class="card-img-top" src={props.pic} alt="Card image" />
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
</div>
<Comp />


</div>
    )
}

export default Comp
