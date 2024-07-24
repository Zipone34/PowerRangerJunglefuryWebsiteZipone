
import "./App"

function About(){
    return(
      <div className="About">
          <img src={junglefuryimg} className="jungle"/>
        <div className="Junglefury">
        <h1 className="text-1">Who is Power Ranger<br/> Jungle Fury?</h1>
        <p className="text-2">a group of young martial artists harnesses animal spirit powers to become Power Rangers and battle the evil spirit Dai Shi and his minions to protect<br/> the world.</p>
       <button className="moreinfo">Read More...</button>
       </div>
      </div>
    );
}


export default About