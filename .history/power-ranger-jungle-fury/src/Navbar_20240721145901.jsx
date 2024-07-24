import logo from "./assets/Power_Rangers_Jungle_Fury_Logo.webp";
import "./App.css";

function Navbar (){
    return(
        <header className="header">
        <a href="#" className="logo"><img src={logo} className="junglelogo"/></a>
        <i className='bx bx-menu' id="menu-icon"></i>
        <nav className="navbar">
            <a href="#" className="claw">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </header>
    );
}

export default Navbar