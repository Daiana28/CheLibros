import { useState } from "react";
import "./Reading.css";
import Sanderson1 from "../../assets/images/sanderson1.png";

export default function Reading() {
  const [progress, setProgress] = useState(20); // porcentaje
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tipoProgreso, setTipoProgreso] = useState("porcentaje"); // 'porcentaje' o 'pagina'
  const totalPaginas = 400; // ejemplo

  const updateProgress = () => {
    const num = Number(inputValue);

    if (tipoProgreso === "porcentaje") {
      if (num >= 0 && num <= 100) {
        setProgress(num);
        setModal(false);
      } else {
        alert("Ingresa un porcentaje válido (0-100)");
      }
    } else {
      if (num >= 0 && num <= totalPaginas) {
        const nuevoPorcentaje = Math.round((num / totalPaginas) * 100);
        setProgress(nuevoPorcentaje);
        setModal(false);
      } else {
        alert(`Ingresa un número de página válido (0-${totalPaginas})`);
      }
    }
  };

  return (
    <div className="reading">
      <h2>Leyendo:</h2>

      <div className="reading-card">
        <img
          src={Sanderson1}
          alt="Aliento de los dioses"
          className="header__img"
        />

        <div className="progress-section">
          <label>Progreso</label>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: progress + "%" }} />
          </div>

          <p>{progress}%</p>

          <button onClick={() => setModal(true)} className="btn">
            Actualizar progreso
          </button>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Actualizar progreso</h3>

            <div className="tipo-progreso">
              <label>
                <input
                  type="radio"
                  value="porcentaje"
                  checked={tipoProgreso === "porcentaje"}
                  onChange={(e) => setTipoProgreso(e.target.value)}
                />
                Porcentaje
              </label>

              <label>
                <input
                  type="radio"
                  value="pagina"
                  checked={tipoProgreso === "pagina"}
                  onChange={(e) => setTipoProgreso(e.target.value)}
                />
                Número de página
              </label>
            </div>

            <input
              type="number"
              min="0"
              max={tipoProgreso === "porcentaje" ? 100 : totalPaginas}
              placeholder={
                tipoProgreso === "porcentaje"
                  ? "Ingresá porcentaje"
                  : `Ingresá página (0-${totalPaginas})`
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <div className="modal-buttons">
              <button className="btn" onClick={updateProgress}>
                Guardar
              </button>
              <button className="btn-cancel" onClick={() => setModal(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
