
import "./App.css";

function Navbar (){
    return(
        <header class="header">
        <a href="#" className="logo">Logo</a>
        <i class='bx bx-menu' id="menu-icon"></i>
        <nav class="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </header>
    );
}

export default Navbar