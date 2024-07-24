import "./App.css";
import Powerrangerteam from "./assets/512245-removebg-preview.png";


function Home(){
    return(
        <div className="Home" id="Home">
        <div className="pages">
           <h1 className="head">JUNGLE FURY</h1>
           <div className="triangle-left"></div>
           <div className="triangle-right"></div>
           <button className="btn">Explore</button>
       </div>
       <img src={Powerrangerteam} className="Powerrangers"/>
       </div>
    );
}


export default Home