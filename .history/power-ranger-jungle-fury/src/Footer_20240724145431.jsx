import logofooter from "./assets/Power_Rangers_Jungle_Fury_Logo.webp";
import "./App.css";

function Footer(){
    return(
       <div className="Footer1" id="Contact">
        <img src={logofooter} className="logoFooter"/>
         <p className="Zipone34"> Design & Created  by: Zipone34 <a href="https://github.com/Zipone34"><i class="fa-brands fa-github"></i></a> <a href="https://www.facebook.com/joshua.yansonsinguelas"><i class="fa-brands fa-facebook"></i></a></p>
       </div>
    );
}



export default Footer