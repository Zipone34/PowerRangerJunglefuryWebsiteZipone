
import red from "./assets/Geki_Red_7EJungle_Fury_Red_Ranger (1).png";
import yellow from "./assets/19fcb9d48db321fc27d73d808a685688.png";
import blue from "./assets/Jungle-Fury-Blue-768x1737.png";
import White from "./assets/Jungle-Fury-Rhino.png";
import claw from "./assets/st_small_507x507-pad_600x600_f8f8f8.u2__1_-removebg-preview.png";
import "./App.css";


function Characters(){
    return(
      
        <div className="slider">
    <div className="slides">
      <div className="slide" id="slide1">
        <img src={red} className="red"/>
        <div className="skills">
        <div className="skills-bar">
          <div className="bar">
            <div className="info">
              <h1 className="R">RED RANGER <img src={claw} className="bite"/></h1>
              <span className="A">Animal Spirit Powers</span>
            </div>
            <div className="progress-line"><span className="html"></span></div>
            <div className="bar">
              <div className="info">
                <span className="M">Martial Arts Mastery</span>
              </div>
              <div className="progress-line"><span className="css"></span></div>
              <div className="bar">
                <div className="info">
                  <span className="J">Jungle Karma</span>
                </div>
                <div className="progress-line"><span className="bootstrap"></span></div>
                <div className="bar">
                  <div className="info">
                    <span className="MM">Morphing Ability</span>
                  </div>
                  <div className="progress-line">
                    <span className="javascript"></span>
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span className="P">Weapon Proficiency</span>
                    </div>
                    <div className="progress-line"><span className="c"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End*/}
      </div>
      </div>
      <div className="slide" id="slide2">
      <img src={yellow} className="yellow"/>
      <div className="skill1">
        <div className="skills-bar1">
          <div className="bar1">
            <div className="info1">
              <h1 className="R">BLUE RANGER <img src={claw} className="bite"/></h1>
              <span className="A">Animal Spirit Powers</span>
            </div>
            <div className="progress-line1"><span className="html"></span></div>
            <div className="bar1">
              <div className="info1">
                <span className="M">Martial Arts Mastery</span>
              </div>
              <div className="progress-line1"><span className="css"></span></div>
              <div className="bar1">
                <div className="info1">
                  <span className="J">Jungle Karma</span>
                </div>
                <div className="progress-line1"><span className="bootstrap"></span></div>
                <div className="bar1">
                  <div className="info1">
                    <span className="MM">Morphing Ability</span>
                  </div>
                  <div className="progress-line1">
                    <span className="javascript"></span>
                  </div>
                  <div className="bar1">
                    <div className="info">
                      <span className="P">Weapon Proficiency</span>
                    </div>
                    <div className="progress-line1"><span className="c1"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End*/}
      </div>
      <div className="slide" id="slide3">
      <img src={blue} className="blue"/>
      </div>
      <div className="slide" id="slide3">
        <img src={White} className="White"/>
      </div>
    </div>
    </div>
  </div>
    );
}


export default Characters