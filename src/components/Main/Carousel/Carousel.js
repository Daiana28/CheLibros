import "./Carousel.css";
import Libro1 from "../../../assets/images/Libro1.png";
import Libro2 from "../../../assets/images/Libro2.png";
import Libro3 from "../../../assets/images/Libro3.png";
import Libro4 from "../../../assets/images/Libro4.png";
import Modal from "../../Modal/Modal";
import { useState } from "react";

export default function Carousel() {
  const libros = [
    {
      id: 1,
      imagen: Libro1,
      titulo: "El principito",
      autor: " by Antoine De Saint-Exupery",
      resumen:
        "El Principito narra la historia de un niño de otro planeta que, viajando por distintos mundos, aprende sobre la amistad, el amor y lo esencial, mostrando que lo importante se ve con el corazón.",
    },
    {
      id: 2,
      imagen: Libro2,
      titulo: "Milk and Honey",
      autor: "by Rupi Kaur",
      resumen:
        "Milk and Honey de Rupi Kaur es una colección de poemas sobre amor, pérdida, trauma y sanación, explorando el dolor y la fortaleza femenina de manera íntima y poderosa.",
    },
    {
      id: 3,
      imagen: Libro3,
      titulo: "El faro del fin del mundo",
      autor: "by Julio Verne",
      resumen:
        "El Faro del Fin del Mundo narra cómo un grupo de hombres defiende un faro aislado en la costa de Tierra del Fuego de piratas y peligros, explorando valor, supervivencia y coraje extremo.",
    },
    {
      id: 4,
      imagen: Libro4,
      titulo: "Habitos Atómicos",
      autor: "By James Clear",
      resumen:
        "Hábitos Atómicos enseña cómo pequeños cambios diarios generan grandes resultados, mostrando estrategias para crear buenos hábitos, romper los malos y mejorar continuamente la vida personal y profesional.",
    },
  ];

  const [libroSeleccionado, setLibroSeleccionado] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comentarios, setComentarios] = useState({}); // {idLibro: [comentarios]}

  const abrirModal = (libro) => {
    setLibroSeleccionado(libro);
    setIsModalOpen(true);
  };

  const cerrarModal = () => {
    setIsModalOpen(false);
    setLibroSeleccionado(null);
  };

  const agregarComentario = (idLibro, comentario) => {
    setComentarios((prev) => ({
      ...prev,
      [idLibro]: prev[idLibro] ? [...prev[idLibro], comentario] : [comentario],
    }));
  };

  return (
    <section className="books-carousel">
      <div className="carousel__header">
        <h3>Libros destacados</h3>
        <div className="carousel__controls">
          <button>{`<`}</button>
          <button>{`>`}</button>
        </div>
      </div>

      <div className="carousel__items">
        {libros.map((libro) => (
          <div
            key={libro.id}
            className="book-card"
            onClick={() => abrirModal(libro)}
          >
            <img src={libro.imagen} alt={libro.titulo} />
            <h4>{libro.titulo}</h4>
            <p>{libro.autor}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal
          libro={libroSeleccionado}
          comentarios={comentarios[libroSeleccionado.id] || []}
          cerrarModal={cerrarModal}
          agregarComentario={agregarComentario}
        />
      )}
    </section>
  );
}
