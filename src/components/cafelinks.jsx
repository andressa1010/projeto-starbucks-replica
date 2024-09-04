import React from "react";
import { Link } from "react-router-dom";



const CafeLinks = () => {
    return ( 
        <>
         <div className="cappucino-container">
            <div className="star-content">
              <Link to="/cappucinoleite">
              <img src="/imagem3.webp" alt="copo"></img>
              </Link>
            </div>
            <div className="star-content">
              <Link to="/cappucinochocolate">
              <img src="/imagem2.webp" alt="copo"></img>
              </Link>
            </div>
            <div className="star-content">
              <Link to="/cappucinosemacucar">
              <img src="/imagem6.webp" alt="copo"></img>
              </Link>
            </div>
            <div className="star-content">
              <Link to="/cappucino">
              <img src="/imagem4.webp" alt="copo"></img>
              </Link>
            </div>
            <div className="star-content">
              <Link to="/cappucinocaramelo">
              <img src="/imagem5.webp" alt="copo"></img>
              </Link>
            </div>
        </div>
        </>
     );
}
 
export default CafeLinks;