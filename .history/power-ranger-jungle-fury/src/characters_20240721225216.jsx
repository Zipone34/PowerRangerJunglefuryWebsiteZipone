
import red from "./assets/Geki_Red_%7EJungle_Fury_Red_Ranger.webp";
import "./App.css";


function Characters(){
    return(
        <div className="slider">
    <div className="slides">
      <div className="slide" id="slide1">
        <img src={red} className=""/>
      </div>
      <div className="slide" id="slide2">Slide 2</div>
      <div className="slide" id="slide3">Slide 3</div>
      <div className="slide" id="slide3">Slide 4</div>
    </div>
    </div>

    );
}


export default Characters