import logo from "./assets/Power_Rangers_Jungle_Fury_Logo.webp";
import claw from "./assets/st_small_507x507-pad_600x600_f8f8f8.u2__1_-removebg-preview.png";
import "./App.css";

function Navbar (){
    return(
        <header className="header">
        <a href="#" className="logo"><img src={logo} className="junglelogo"/></a>
        <i className='bx bx-menu' id="menu-icon"></i>
        <nav className="navbar">
            <a href="#"className="hover1">Home<img src={claw} className="claw1"/> </a>
            <a href="#" className="hover2">About<img src={claw} className="claw2"/> </a>
            <a href="#" className="hover3">Characters<img src={claw} className="claw3"/> </a>
            <a href="#" className="hov">Contact<img src={claw} className="claw4"/></a>
        </nav>
    </header>
    );
}

export default Navbar