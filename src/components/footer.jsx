import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p>Desenvolvido por Andressa Nunes</p>
          <p>
            &copy; {new Date().getFullYear()} Starbucks. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
