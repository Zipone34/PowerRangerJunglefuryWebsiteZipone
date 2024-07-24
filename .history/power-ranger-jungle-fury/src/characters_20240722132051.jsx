
import red from "./assets/Geki_Red_7EJungle_Fury_Red_Ranger (1).png";
import yellow from "./assets/19fcb9d48db321fc27d73d808a685688.png";
import blue from "./assets/Jungle-Fury-Blue-768x1737.png";
import White from "./assets/Jungle-Fury-Rhino.png";
import "./App.css";


function Characters(){
    return(
        <div className="slider">
    <div className="slides">
      <div className="slide" id="slide1">
        <img src={red} className="red"/>
        <div class="skills">
        <div class="skills-bar">
          <div class="bar">
            <div class="info">
              <span>HTML</span>
            </div>
            <div class="progress-line"><span class="html"></span></div>
            <div class="bar">
              <div class="info">
                <span>CSS</span>
              </div>
              <div class="progress-line"><span class="css"></span></div>
              <div class="bar">
                <div class="info">
                  <span>BOOTSTRAP</span>
                </div>
                <div class="progress-line"><span class="bootstrap"></span></div>
                <div class="bar">
                  <div class="info">
                    <span>JAVASCRIPT</span>
                  </div>
                  <div class="progress-line">
                    <span class="javascript"></span>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>C PROGRAMMING</span>
                    </div>
                    <div class="progress-line"><span class="c"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="slide" id="slide2">
      <img src={yellow} className="yellow"/>
      </div>
      <div className="slide" id="slide3">
      <img src={blue} className="blue"/>
      </div>
      <div className="slide" id="slide3">
        <img src={White} className="White"/>
      </div>
    </div>
    </div>

    );
}


export default Characters