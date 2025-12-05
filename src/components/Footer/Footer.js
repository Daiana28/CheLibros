import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import Logo from "../../assets/images/Logo.png";
import iconinstagram from "../../assets/images/iconinstagram.png";
import iconlinkedin from "../../assets/images/iconlinkedin.png";
import iconemail from "../../assets/images/iconemail.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* --- Columna 1: Logo + social --- */}
        <div className="footer__brand">
          <img src={Logo} alt="LogoLibro" className="header__img" />

          <p>Creemos en el poder de la lectura para transformar personas.</p>

          <div className="footer__social">
            <a href="#">
              <img src={iconinstagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={iconemail} alt="Email" />
            </a>
            <a href="#">
              <img src={iconlinkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* --- Columna 2: Texto central --- */}
        <div className="footer__text">
          <h2>
            Books make us <span>better.</span>
          </h2>
          <p>
            Descubrí historias, autores y mundos que te acompañan todos los
            días.
          </p>
        </div>

        {/* --- Columna 3: Secciones --- */}
        <div className="footer__links">
          <h4>Secciones</h4>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/libros">Libros</Link>
            </li>
            <li>
              <Link to="/perfil">Mi perfil</Link>
            </li>
            <li>
              <Link to="/login">Iniciar sesión</Link>
            </li>
          </ul>
        </div>

        {/* --- Columna 4: Recursos --- */}
        <div className="footer__links">
          <h4>Recursos</h4>
          <ul>
            <li>
              <a href="#">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Términos y condiciones</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
