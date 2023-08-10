import React, { useState } from 'react';
import logo from '../images/logo.png'
import Swishpic from '../images/Swishpic.png'
import Visapic from  '../images/Visapic.png'
import { Link } from 'react-router-dom';

function Payment() {
  const [Visa, SetVisa] = useState(false);
  const [Swish, SetSwish] = useState(false);
  const [SwishNumber, SetNumber] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCVC] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
 

  function Paymentmethodvisa() {
    SetVisa(true);
    SetSwish(false);
  }

  function Paymentmethodswish() {
    SetSwish(true);
    SetVisa(false);
  }
  
    function handleconfirmation(){
    fetch('http://localhost:4000/Orders')
    .then((res) => res.json())
    .then((data) => {
      
      const OrderItem = data.filter((orderItem) => orderItem.hasOwnProperty('id'));
  
      
      const deleteOrders = OrderItem.map((theOrder) => {
        return fetch(`http://localhost:4000/Orders/${theOrder.id}`, {
          method: 'DELETE',
        });
      });
  
      return Promise.all(deleteOrders);
    }).then(() => {
      
      window.location.href = "/Confirmed"
    })
  }

  return (
    
        
    <div style={{ backgroundColor: "black", width: "100%", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <img src={logo} width={100} height={100} style={{ marginLeft: "1300px" }} alt="Logo"></img>
      <div className="Payment">
        <h1 className='textcolor family-text'>Payment Details </h1>
        <div className="form-group">
          <label>Name: </label>
          <input style={{ backgroundColor: 'orange' }} type="text" placeholder="" 
          value={name} onChange={e => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Address: </label>
          <input style={{ backgroundColor: 'orange' }} type="text" placeholder="" 
          value={address} onChange={e => setAddress(e.target.value)} />
        </div>

        <div className="form-group">
          <label>House Number: </label>
          <input style={{ backgroundColor: 'orange' }} type="text" placeholder=""
           value={houseNumber} onChange={e => setHouseNumber(e.target.value)} />
        </div>

        <div className="form-group">
          <label>City: </label>
          <input style={{ backgroundColor: 'orange' }} type="text" placeholder="" 
          value={city} onChange={e => setCity(e.target.value)} />
        </div>
 
        <h1 className='textcolor family-text' style={{color:"orange", fontSize:"1em" }}> Please choose your payment method</h1>
        

        <div className="Icon-form">
          <div style={{ position: "relative" }}>
            <img src={Visapic} width={50} className='img-payment' onClick={Paymentmethodvisa} alt="Visa" />
            {Visa && (
              <div style={{ position: "absolute", top: "50%", left: "50%", textAlign: "center" }}>
                
              </div>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <img src={Swishpic} width={45} height={50} className='img-payment' onClick={Paymentmethodswish} alt="Swish" />
            {Swish && (
              <div style={{ position: "absolute", top: "50%", left: "50%", textAlign: "center" }}>
              </div>
            )}
          </div>
        </div>

        {Visa && (
          <>
            <div className="form-group">
              <label>Card Number: </label>
              <input style={{ backgroundColor: 'orange' }} type="text" placeholder=""
               value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
            </div>
            <div className="form-group">
              <label>CVC: </label>
              <input style={{ backgroundColor: 'orange' }} type="text" placeholder=""
               value={cvc} onChange={e => setCVC(e.target.value)} />
            </div>
          </>
        )}

        {Swish && (
          <div className="form-group">
            <label>Phone Number: </label>
            <input style={{ backgroundColor: 'orange' }} type="text" placeholder=""
            value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
          </div>
        )}


        <button  onClick={handleconfirmation} style={{ backgroundColor: "orange", color: "black", padding: "10px 20px", fontSize: "16px", marginTop: "20px", borderRadius:"20px" }}>Confirm</button>
       
       <Link to="/Orders">
        <button style={{ backgroundColor: "orange", color: "black", padding: "10px 20px", fontSize: "16px", left:"20px", marginTop: "20px", borderRadius:"20px" }}>Back</button>
       </Link>
      </div>
      </div>

  

  );

}



export default Payment;