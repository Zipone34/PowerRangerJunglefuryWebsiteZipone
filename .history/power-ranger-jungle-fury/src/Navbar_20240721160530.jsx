import logo from "./assets/Power_Rangers_Jungle_Fury_Logo.webp";
import "./App.css";

function Navbar (){
    return(
        <header className="header">
        <a href="#" className="logo"><img src={logo} className="junglelogo"/></a>
        <i className='bx bx-menu' id="menu-icon"></i>
        <nav className="navbar">
            <a href="#" className="claw1">Home <img src={claw} /></a>
            <a href="#" className="claw2">About</a>
            <a href="#" className="claw3">Characters</a>
            <a href="#" className="claw4">Contact</a>
        </nav>
    </header>
    );
}

export default Navbar