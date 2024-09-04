import React from "react";
import Home from "../components/home";
import CafeLinks from "../components/cafelinks";
import Footer from "../components/footer";


const Novidades = () => {
  return (
    <>
      <Home />
      <img
        className="logo-star"
        src="/01_d_cc_platform_hero.webp"
        alt="imagem"
      ></img>

     <div className="title-milk">
     <h2 className="title">SABOREIE ANTES QUE ACABE</h2>
     </div>

      <p>
        Descubra a nossa oferta de edição limitada: Cappuccino Chocolate e
        Avelã. Inspirado nos cafés favoritos dos nossos clientes, este clássico
        com twist é a forma perfeita de trocar as voltas à rotina. Desfrute de
        café todos os dias, a qualquer hora e em qualquer lugar.
      </p>

      <div className="container-banner">
        <div className="content-banner">
            <h2>EDIÇÃO LIMITADA</h2>
            <img className="img-banner-cafe"
             src="/imagem7.webp" alt="imagem"></img>
            <p>Cremoso e aveludado, este delicioso café gelado está disponível por tempo limitado</p>
        </div>
        <div className="content-banner">
            <h2>CAFÉ 100%</h2>
            <img className="img-banner"
             src="/cappucino.webp" alt="imagem"></img>
            <p>
                usamos grão de café arábica para que possa saborear um café delicioso e de elevada qualidade
            </p>
        </div>
        <div className="content-banner">
            <h2>EDIÇÃO LIMITADA</h2>
            <img className="img-banner"
             src="/cappucino-chocolate.webp" alt="imagem"></img>
            <p>Cremoso e aveludado, este delicioso café gelado está disponível por tempo limitado</p>
        </div>
        <div className="content-banner">
            <h2>EDIÇÃO LIMITADA</h2>
            <img className="img-banner"
             src="/capputinocaramelo.webp" alt="imagem"></img>
            <p>Cremoso e aveludado, este delicioso café gelado está disponível por tempo limitado</p>
        </div>
       </div>


      <div className="title-milk">
      <h2 className="title">
        CONHEÇA NOSSO MILK SHAKE
       </h2>
      </div>

       <div className="container-milk">
        <div className="content-milk">
            <img className="img-mil"
             src="/img1.png" alt="imagem"></img>
        </div>
        <div className="content-milk">
            <img className="img-mil"
             src="/img2.png" alt="imagem"></img>
        </div>
        <div className="content-milk">
            <img className="img-mil"
             src="/img3.png" alt="imagem"></img>
        </div>
       </div>
       
       <CafeLinks/>

       <Footer/>
    </>
  );
};

export default Novidades;
