import React, {useState} from "react";
import './App.css';
// import All from "./components/All";
import Form from "./components/Form";
import Link from "./components/Link";
import Location from "./components/Change-location";
import Order from "./Admin-Samyak/Order/OrderDetails";

function App() {  

  const [pop, setPop] = useState(false);

  function PopUp(){
    setPop((prevValue) => !prevValue);
  }

  return (
    <div>
      <Order />
    </div>
    
    // <div className="container">
    //   <div className='top'>
    //     <div className='heading'>
    //       <span>Your Deliver Address</span>
    //     </div>
    //     <div className='line'></div>
    //   </div>
    //   <div className="section-location">
    //     <div className='map'></div>
    //     <div className='heading'>
    //       <span>Delivery Location</span>
    //     </div>
    //       <Link set={PopUp} />
    //   </div>
    //     <Form />
    //     <Location pop={pop} set={PopUp}/>
    // </div>
  );
};

export default App;
