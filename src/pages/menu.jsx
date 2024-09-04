import React from "react";
import Home from "../components/home";
import Footer from "../components/footer";

const produtosDaLoja = [
  {
    id: 1,
    name: "Bebidas",
    image: "/bebidas 2.png.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    price: "",
    description:
      "Descubra qual é o “perfect pairing” da sua bebida favorita. Não perca a variedade de produtos que preparamos para você",
  },
  {
    id: 2,
    name: "Bebidas Expresso",
    image: "/Espresso.jpeg.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    price: "",
    description:
      "Bebidas com os melhores grãos de café 100% arábica, cuidadosamente selecionados e torrados.",
  },
  {
    id: 3,
    name: "Bebidas Chá",
    image: "/Teas.jpg.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    price: "",
    description:
      "Bebidas com os melhores grãos de café 100% arábica, cuidadosamente selecionados e torrados.",
  },
  {
    id: 4,
    name: "Chocolate",
    image: "/SBX-UK-MOP-HotChocolate.jpg.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    price: "",
    description:
      "Descubra os nossos chocolates e as suas melhores combinações, quentes ou frios.",
  },
  {
    id: 5,
    name: "Frappuccino com base de café",
    image: "/frappuccino café.png.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    price: "",
    description:
      "Bebida refrescante com gelo triturado, café, leite ou bebida vegetal e natas. Pode escolher o seu sabor favorito.",
  },
  {
    id: 6,
    name: "Frappuccino com base de creme de leite",
    image: "/SBX-UK-MOP-Cookies&CreamFrappuccino.jpg.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    price: "",
    description:
      "Bebida refrescante com gelo triturado, leite ou bebida vegetal e natas. Pode escolher o seu sabor favorito.",
  },
  {
    id: 7,
    name: "Frappuccino com base de creme de leite",
    image: "/refresha_0.png.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    price: "",
    description:
      "Bebida refrescante com gelo triturado, leite ou bebida vegetal e natas. Pode escolher o seu sabor favorito.",
  },
  {
    id: 8,
    name: "Frappuccino com base de creme de leite",
    image: "/refresha.png.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    price: "",
    description:
      "Bebida refrescante com gelo triturado, leite ou bebida vegetal e natas. Pode escolher o seu sabor favorito.",
  },
];


const produtosDoceseSalgados=[
  {
    id: 1,
    name: "Bolo Chocolate",
    image: "/tarta chocolate.png (1).webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    description: "Delicioso bolo de chocolate com creme de chocolate."
  },
  {
    id: 2,
    name: "Bolo Chocolate",
    image: "/tarta chocolate.png (1).webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    description: "Delicioso bolo de chocolate com creme de chocolate."
  },
  {
    id: 3,
    name: "Torta Framboesa",
    image: "/tarta frambuesa.png.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    description: "Deliciosa torta Framboesa com pedaços de maça"
  },
  {
    id: 4,
    name: "Bolo de Cenoura",
    image: "/tartas zanahoria.png.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    description: "Bolo de cenoura com cobertura de açúcar."
  },
  {
    id: 5,
    name: "Sanduíches",
    image: "/sandwiches y bocadillos.png.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    description: "Os melhores ingredientes e combinações."
  },
  {
    id: 6,
    name: "croissant",
    image: "/SBX-UK-MOP-ButterCroissant (1).jpg.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    description: "Os melhores ingredientes e combinações."
  },
  {
    id: 7,
    name: "Bolo leve",
    image: "/muffin.png.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    description: "Os melhores ingredientes e combinações."
  },
  {
    id: 8,
    name: "Sanduíches Veganos",
    image: "/veganos.png.webp",
    avaliacao: "/estrelinhas-avaliacao.png",
    description: "Os melhores ingredientes e combinações."
  },
  

]



const Menu = () => {
  return (
    <>
      <Home />
      <img className="logo-cafe" src="/logo-cafe.jpg" alt="logo"></img>

      <div className="container">
        <div className="content">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="titulo">Uma surpresa refrescante para você</h2>
          <br></br>
          <p className="sub-titulo">
            Conheça nossa linha de Cold Brew e Refreshers{" "}
          </p>
        </div>
        <div className="content">
          <img className="img-capa" src="/imagem1.png" alt="imagem"></img>
        </div>
      </div>

     <div className="container-desainer">
      <div className="content-desainer">
        <img className="img-bebida"
         src="/14709_SBUX_FALL_ENXOVAL_2-1024x1024.webp"></img>
      </div>
      <div className="content-desainer">
        <img className="img-bebida"
         src="/starbucks-mgs.webp"></img>
      </div>
      <div className="content-desainer">
        <img className="img-sheik"
         src="/b2ap3_large_HELLO-1.png"></img>
      </div>
     </div>


      <h2 className="title">
        Bebidas deliciosas e artesanais. Comidas únicas e saborosas. O segredo
        para tornar a sua vida melhor.
      </h2>
      <p>
        É verdade. A chávena de café perfeita e uma refeição leve, saudável e
        deliciosa podem melhorar o seu dia. Desse modo, deve certificar-se de
        que escolhe produtos de máxima qualidade. Porque, na verdade, não é
        assim que devemos viver cada dia?
      </p>

      <div id="produtos-container">
        {produtosDaLoja.map((produto) => (
          <div key={produto.id} className="produto">
            <h2>{produto.name} </h2>
            <img src={produto.image} alt={produto.name}></img>
            <img
              className="avaliacoes"
              src={produto.avaliacao}
              alt={produto.name}
            ></img>
            <p> {produto.description}</p>
          </div>
        ))}
      </div>

      <div className="container-desainer">
        <div className="content-desainer">
          <img className="img-bebida"
            src="/14709_SBUX_FALL_ENXOVAL_banner_app_cinnamon_V5-2.webp"></img>
        </div>
        <div className="content-desainer">
          <img className="img-bebida"
            src="/image (2).webp"></img>
        </div>
        <div className="content-desainer">
          <img className="img-bebida"
            src="/14709_SBUX_FALL_ENXOVAL_banner_app_cinnamon_V5-2.webp"></img>
        </div>
      </div>

      <h2 className="title">
        Quer fazer uma pausa para almoçar ou escolher uma refeição leve, temos
        exatamente o que você deseja.
      </h2>
      <p>
        Na Starbucks utilizamos os melhores ingredientes, para lhe oferecer uma
        seleção rica e variada de comida que acompanha de forma perfeita os
        nossos cafés.
      </p>

      <p>
        Nas nossas lojas encontrará sabores diferentes e tentadores, com os
        quais poderá saborear a sua chávena de café favorito. Uma comida
        deliciosa e única para que viva a sua experiência Starbucks desde o
        início até ao final do dia!
      </p>


      <div id="produtos-container">
        {produtosDoceseSalgados.map((produto) => (
          <div key={produto.id} className="produto">
            <h2>{produto.name} </h2>
            <img src={produto.image} alt={produto.name}></img>
            <img
              className="avaliacoes"
              src={produto.avaliacao}
              alt={produto.name}
            ></img>
            <p> {produto.description}</p>
          </div>
        ))}
      </div>

     <Footer/>
    </>
  );
};

export default Menu;
