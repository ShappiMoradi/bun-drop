import React, { useEffect, useState } from 'react';
import Products from '../Components/Products';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';



function Meny() {
    const[GetProduct,setProduct]=useState([]);
    const[isModal,setModal] = useState(false);
    useEffect(()=>{
    fetch("http://localhost:4000/Burgers").then((response)=> response.json()).then((data)=>setProduct(data))
    
    },[])

function getModalstate(props){
  if(isModal=== true){
    setModal(false)
    console.log(isModal)
    
  } else if (isModal === false){
    setModal(true)
    console.log(isModal)
  }
}


 return (<div style={{height:"100%", display:"flex", alignItems:"center" , flexDirection:"column", backgroundColor: "black"}}>
    <img src={logo} width={100} height={100} style={{marginLeft:"1400px"}}></img>
    <h1 className='textcolor family-text'>Think , pick, click</h1>
    <div className='allproducts'>
    <Link to="/Orders">
    <button style={{backgroundColor:'orange', position:"fixed", bottom:"20px", right:"20px",borderRadius:"20px", width:"200px", height:"40px",}}> Continue</button>
      </Link>
     {
     GetProduct.map((H)=>(
    <Products
    name ={H.name} 
    img={H.image}
    Modal ={getModalstate}
    price ={H.price}

    
    
    
    
    />
     ))
     }
    </div>
    {}
    </div> );
}


export default Meny;