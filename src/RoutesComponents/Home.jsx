import React from 'react';
import Navbar from '../UIComponents/Navbar';
import { Link } from 'react-router-dom';



function Home() {
    return (<div className='Home-container'>
        <h1 className='Text-mall'>Dinner at your doorstep</h1>
        <Link to="/Meny">
        <button className='Btn-Home'>Get Started</button>
        </Link>
     
    </div>);

    
}



export default Home;