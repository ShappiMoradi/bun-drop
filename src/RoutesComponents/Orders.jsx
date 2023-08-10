import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import OrderList from '../Components/OrderList';
import { Link } from 'react-router-dom';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/Orders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, []);


  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
  let total = 0;
  orders.forEach((myorder) => {
    total += myorder.Price; 
  });
  setTotalPrice(Number(total));
  console.log(total);
}, [orders]); 

const isCartEmpty = orders.length === 0;


  return (
    <div style={{ height: "800px", backgroundColor: "black", display: "flex", alignItems: "center", flexDirection: "column" }}>
      <img src={logo} width={100} height={100} style={{ marginLeft: "1400px" }} alt="Logo"></img>
      <h1 className='textcolor family-text'>Almost There...</h1>
      <div className='Orders'>
        <div className='Btn-continue'></div>
        <Link to="/Payment">
          <button
            style={{ backgroundColor: 'orange', position: "fixed", bottom: "20px", right: "5px", width: "200px", height: "40px", borderRadius: "20px" }}
            disabled={isCartEmpty} 
          >
            Continue to payment
          </button>
        </Link>
        <Link to="/Meny">
          <button style={{ backgroundColor: 'orange', position: "fixed", bottom: "20px", left: "20px", width: "200px", height: "40px", borderRadius: "20px" }}> Back to menu</button>
        </Link>

        {
          orders.map((myorder) => (
            <OrderList
              key={myorder.id}
              Id={myorder.id}
              Name={myorder.Name}
              img={myorder.image}
              price={myorder.price}
            />
          ))
        }

       
        <p style={{color:"orange"}}>Total Price: {totalPrice} SEK</p>

      </div>
    </div>
  );
}

export default Orders;



