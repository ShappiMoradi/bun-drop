import React, { useEffect, useState } from 'react';
function Products(props) {

const[getName, setName] = useState();
 const[isModal,setModal] = useState(false);
useEffect(()=>{
setName(props.name);
},[]) 


function addclick(data){
fetch("http://localhost:4000/Orders", {
  method: "POST",
  headers: {
    Accept: 'application.json',
    'Content-Type': 'application/json'
  }, 
  body: JSON.stringify({
Name: props.name,
Price:props.price
  })
})


setModal(true);
alert('This has been added to your cart : '+ props.name)
}



return (<div style={{display: 'flex',flexDirection:'column', alignItems:'center'}} > 
<div className='Product-container'>
<h2 className='textcolor'>{props.name}</h2>
<img className='img-container' src={props.img} alt="" />
<h3 className= 'textcolor'>{props.price}Kr</h3>
<button onClick={addclick} name={props.name} className='btn-add'>+</button>

</div>
{}
 
    </div> );
    
    
}

export default Products;