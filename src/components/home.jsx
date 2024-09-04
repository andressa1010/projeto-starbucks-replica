import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return ( 
        <>
         <header className="navbar">
         <img src="/starbucks-nav-logo.svg" alt="Logo" class="navbar-logo"></img>
         <nav className="navbar-menu">
            <ul>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/nossocafe">Nosso Café</Link></li>
                <li><Link to="/novidades">Novidades Refrescantes</Link></li>
            </ul>
         </nav>
         <img src="/sb-historias-logo.svg" alt="Outra Imagem" className="navbar-logo"></img>
         </header>

        
        </>
     );
}
 
export default Home;