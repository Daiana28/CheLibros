import PerfilHeader from "../components/PerfilHeader/PerfilHeader";
import Reading from "../components/Reading/Reading";
import WantToRead from "../components/WantToRead/WantToRead";
import "./Perfil.css";

export default function Perfil() {
  return (
    <div className="perfil-container">
      <PerfilHeader />

      <div className="perfil-grid">
        <div className="col-izq">
          <Reading />
        </div>

        <div className="col-der">
          <WantToRead />
        </div>
      </div>
    </div>
  );
}
