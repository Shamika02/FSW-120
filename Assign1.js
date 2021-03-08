import React from "react"

function ColorTop(props) {
    console.log(props)
return(
    <div className= "ColorTop">
      <img src={props.imgUrl} />
        <h3>{props.name}</h3>
        <p>Phone: {props.phone}</p>
        <p>Email:{props.email}</p>
        <hr/> 
    </div>

)

}
export default ColorTop