import "./App.css";
import React, { useState, useEffect } from 'react';
import Powerrangerteam from "./assets/512245-removebg-preview.png";
import clawloader from "./assets/st_small_507x507-pad_600x600_f8f8f8.u2__1_-removebg-preview.png";

function Home(){

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a loading process
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000); // Adjust the time as needed
  
      return () => clearTimeout(timer);
    }, []);

    return(
        <div className="Home" id="Home">
        <div className="pages">
           <h1 className="head">JUNGLE FURY</h1>
           <div className="triangle-left"></div>
           <div className="triangle-right"></div>
           <button className="btn">Explore</button>
       </div>
       <img src={Powerrangerteam} className="Powerrangers"/>
       <div class="loader" id="loader">
    <img src={clawloader} alt="Loading..." class="loader-image"/>
  </div>


       </div>
    );
}


export default Home