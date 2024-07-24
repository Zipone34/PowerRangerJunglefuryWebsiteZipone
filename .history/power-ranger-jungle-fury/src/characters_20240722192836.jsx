
import red from "./assets/Geki_Red_7EJungle_Fury_Red_Ranger (1).png";
import yellow from "./assets/19fcb9d48db321fc27d73d808a685688.png";
import blue from "./assets/Jungle-Fury-Blue-768x1737.png";
import Violet from "./assets/479bf19c57750b20c4bf248a716d5ab7.png";
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
      <div className="skills1">
        <div className="skills-bar1">
          <div className="bar1">
            <div className="info1">
            <h1 className="Y">YELLOW RANGER<img src={claw} className="bite"/></h1>
              <span className="A1">Animal Spirit Powers</span>
            </div>
            <div className="progress-line1"><span className="html1"></span></div>
            <div className="bar1">
              <div className="info1">
                <span className="M1">Martial Arts Mastery</span>
              </div>
              <div className="progress-line1"><span className="css1"></span></div>
              <div className="bar1">
                <div className="info1">
                  <span className="M1">Jungle Karma</span>
                </div>
                <div className="progress-line1"><span className="bootstrap1"></span></div>
                <div className="bar1">
                  <div className="info1">
                    <span className="M11">Morphing Ability</span>
                  </div>
                  <div className="progress-line1">
                    <span className="javascript1"></span>
                  </div>
                  <div className="bar1">
                    <div className="info1">
                      <span className="W1">Weapon Proficiency</span>
                    </div>
                    <div className="progress-line1"><span className="c1"></span></div>
                  </div>
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
      <div class="skills2">
        <div class="skills-bar2">
          <div class="bar2">
            <div class="info2">
            <h1 className="B">BLUE RANGER<img src={claw} className="bite"/></h1>
              <span className="A3">Animal Spirit Powers</span>
            </div>
            <div class="progress-line2"><span class="html2"></span></div>
            <div class="bar2">
              <div class="info2">
                <span className="M3">Martial Arts Mastery</span>
              </div>
              <div class="progress-line2"><span class="css2"></span></div>
              <div class="bar2">
                <div class="info2">
                  <span className="J3">Jungle Karma</span>
                </div>
                <div class="progress-line2"><span class="bootstrap2"></span></div>
                <div class="bar2">
                  <div class="info2">
                    <span className="M3">Morphing Ability</span>
                  </div>
                  <div class="progress-line2">
                    <span class="javascript2"></span>
                  </div>
                  <div class="bar2">
                    <div class="info2">
                      <span className="W3">Weapon Proficiency</span>
                    </div>
                    <div class="progress-line2"><span class="c2"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>


      <div className="slide" id="slide5">
        <img src={White} className="White"/>
        <div class="skills3">
        <div class="skills-bar3">
          <div class="bar3">
            <div class="info3">
            <h1 className="W7">WHITE RANGER<img src={claw} className="bite"/></h1>
              <span className="A4">Animal Spirit Powers</span>
            </div>
            <div class="progress-line3"><span class="html3"></span></div>
            <div class="bar3">
              <div class="info3">
                <span className="M4">Martial Arts Mastery</span>
              </div>
              <div class="progress-line3"><span class="css3"></span></div>
              <div class="bar3">
                <div class="info3">
                  <span className="J4">Jungle Karma</span>
                </div>
                <div class="progress-line3"><span class="bootstrap3"></span></div>
                <div class="bar3">
                  <div class="info3">
                    <span className="M4">Morphing Ability</span>
                  </div>
                  <div class="progress-line3">
                    <span class="javascript3"></span>
                  </div>
                  <div class="bar3">
                    <div class="info3">
                      <span className="W77">Weapon Proficiency</span>
                    </div>
                    <div class="progress-line3"><span class="c3"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/*End*/}
      </div>
      <div className="slide" id="slide4">
        <img src={Violet} className="Violet"/>
        <div class="skills4">
        <div class="skills-bar4">
          <div class="bar4">
            <div class="info4">
              <span>HTML</span>
            </div>
            <div class="progress-line4"><span class="html4"></span></div>
            <div class="bar4">
              <div class="info4">
                <span>CSS</span>
              </div>
              <div class="progress-line4"><span class="css4"></span></div>
              <div class="bar4">
                <div class="info4">
                  <span>BOOTSTRAP</span>
                </div>
                <div class="progress-line4"><span class="bootstrap4"></span></div>
                <div class="bar4">
                  <div class="info4">
                    <span>JAVASCRIPT</span>
                  </div>
                  <div class="progress-line4">
                    <span class="javascript4"></span>
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
        {/*End*/}
      </div>

      

    </div>
    </div>
    );
}


export default Characters