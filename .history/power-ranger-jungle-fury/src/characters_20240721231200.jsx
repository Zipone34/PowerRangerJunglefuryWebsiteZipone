
import red from "./assets/Geki_Red_7EJungle_Fury_Red_Ranger (1).png";
import yellow from "./assets/19fcb9d48db321fc27d73d808a685688.png";
import blue form "./assets/";
import "./App.css";


function Characters(){
    return(
        <div className="slider">
    <div className="slides">
      <div className="slide" id="slide1">
        <img src={red} className="red"/>
      </div>
      <div className="slide" id="slide2">
      <img src={yellow} className="yellow"/>
      </div>
      <div className="slide" id="slide3">
      <img src={blue} className="blue"/>
      </div>
      <div className="slide" id="slide3">Slide 4</div>
    </div>
    </div>

    );
}


export default Characters