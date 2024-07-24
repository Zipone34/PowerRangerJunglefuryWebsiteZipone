import "./App.css";
import fro


function Home(){
    return(
        <div className="Home">
        <div className="pages">
           <h1 className="head">JUNGLE FURY</h1>
           <div className="triangle-left"></div>
           <div className="triangle-right"></div>
           <button className="btn">Explore <img src={claw} className="claw"/></button>
       </div>
       <img src={Powerrangerteam} className="Powerrangers"/>
       </div>
    );
}


export default Home