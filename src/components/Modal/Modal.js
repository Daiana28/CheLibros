import { useState } from "react";
import "./Modal.css";

export default function Modal({
  libro,
  comentarios,
  cerrarModal,
  agregarComentario,
}) {
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [quieroLeer, setQuieroLeer] = useState(false);
  const [leido, setLeido] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevoComentario.trim()) {
      agregarComentario(libro.id, nuevoComentario);
      setNuevoComentario("");
    }
  };

  return (
    <div className="modal-overlay" onClick={cerrarModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={cerrarModal}>
          ×
        </button>

        <div className="modal-body">
          <img src={libro.imagen} alt={libro.titulo} className="modal-img" />

          <h2>{libro.titulo}</h2>
          <p>{libro.resumen}</p>

          <div className="modal-checkboxes">
            <label>
              <input
                type="checkbox"
                checked={quieroLeer}
                onChange={() => setQuieroLeer(!quieroLeer)}
              />{" "}
              Quiero leer
            </label>

            <label>
              <input
                type="checkbox"
                checked={leido}
                onChange={() => setLeido(!leido)}
              />{" "}
              Leído
            </label>
          </div>

          <div className="modal-comentarios">
            <h5>Comentarios</h5>
            <ul>
              {comentarios.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={nuevoComentario}
                onChange={(e) => setNuevoComentario(e.target.value)}
                placeholder="Deja un comentario..."
              />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
