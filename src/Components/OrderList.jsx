import React, { useEffect, useState } from 'react';


function OrderList(Burger) {


  useEffect(()=> {
  console.log(Burger.Name, Burger.Id);
  }) 
  function removeBurger() {
   

    fetch(`http://localhost:4000/Orders/${Burger.Id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
         
          removeFromUI();
        }
      })
      window.location.reload()
  }

  function removeFromUI() {
    
  }


  function addToUI() {
  }

  return (
    <div>
      <h1 style={{color:"orange"}}>{Burger.Name}</h1>
       <h1 style={{color:"orange"}}></h1>
      <button onClick={removeBurger}>X</button>
     
    </div>
  );
}


export default OrderList;

      

