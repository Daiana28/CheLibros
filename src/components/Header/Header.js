import "./Header.css";
import Logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="LogoLibro" className="header__img" />
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/libros">Libros</NavLink>
        <NavLink to="/perfil">Mi Perfil</NavLink>
        <NavLink to="/login">Iniciar sesión</NavLink>
        <NavLink to="/register">Registrarse</NavLink>
      </nav>
    </header>
  );
}
