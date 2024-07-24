import logofooter from "./assets/Power_Rangers_Jungle_Fury_Logo.webp";
import "./App.css";

function Footer(){
    return(
       <div className="Footer1">
        <img src={logofooter} className="logoFooter"/>
         <p className="Zipone34"> Design & Created  by: Zipone34 <i class="fa-brands fa-github"></i></p>
       </div>
    );
}



export default Footer