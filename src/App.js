
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './RoutesComponents/Home';
import Meny from './RoutesComponents/Meny';
import NotFound from './RoutesComponents/NotFound';
import Orders from './RoutesComponents/Orders';
import Payment from './RoutesComponents/Payment';
import Confirmed from './RoutesComponents/Confirmed';



function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Meny" element={<Meny/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/Orders' element={<Orders/>}/>
      <Route path='/Payment' element={<Payment/>}/>
      <Route path='/Confirmed' element={<Confirmed/>}/>

      



     
    </Routes>
    </Router>
    </div>
  );
}

export default App;
