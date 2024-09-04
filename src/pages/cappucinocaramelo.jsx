import React from "react";
import Home from "../components/home";
import CafeLinks from "../components/cafelinks";


const CappucinoCaramelo = () => {
    return ( 
        <>
        <Home/>

        <img className="logo-star"
         src="/01_d_cc_caramelmacchiato.webp" alt="logo"></img>


<div className="container-info">
      {/* Tabela de informações nutricionais */}
      <div className="nutrition-info">
        <h2 className="title">INFORMAÇÃO NUTRICIONAL (100 ml)</h2>
        <table>
          <tbody>
            <tr>
              <td>kJ</td>
              <td>283</td>
            </tr>
            <tr>
              <td>Kcal</td>
              <td>67</td>
            </tr>
            <tr>
              <td>Total de gorduras (g)</td>
              <td>1,9</td>
            </tr>
            <tr>
              <td>Gordura saturada (g)</td>
              <td>1,2</td>
            </tr>
            <tr>
              <td>Total de hidratos de carbono (g)</td>
              <td>8,9</td>
            </tr>
            <tr>
              <td>Total de açúcares (g)</td>
              <td>8,6</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Imagem do produto com animação */}
      <div className="product-image">
        <img
          src="/capputinocaramelo.webp"
          alt="Starbucks Signature Chocolate"
          className="animated-image"
        />
      </div>

      {/* Lista de ingredientes */}
      <div className="ingredients">
        <h2 className="title">INGREDIENTES</h2>
        <p>Leite 2% gordura (75%), água (17,8%), açúcar (4,7%), cacau em pó magro (2,5%), estabilizadores (goma gelana, carragenina), aromatizante natural.</p>
      </div>
    </div>

       <CafeLinks/>
        </>
     );
}
 
export default CappucinoCaramelo;