import React from "react";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";


function Confirmed () {
    return (
    <div style={{ height:"800px", backgroundColor:"black" , display:"flex", alignItems:"center", flexDirection:"column" }}>
     <img src={logo} width={100} height={100} style={{marginLeft:"1400px"}}></img>
     <h1 className='textcolor family-text'>Hooray! Your order is on its way</h1>

     <h1 className='textcolor family-text'style={{color:"white"}}>The estimated time for your order: </h1>

     <h1 className='textcolor family-text'style={{color:"white"}}>21.10 </h1>
<div>
<Link style={{}} to="/">
<button style={{backgroundColor:'orange', bottom:"10px", borderRadius:"20px", width:"200px", height:"40px",marginTop:"100px" }}> Back to home</button>
 
 </Link>

</div>

    </div> );
}

export default Confirmed;