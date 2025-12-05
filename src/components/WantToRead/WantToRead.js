import "./WantToRead.css";

export default function WantToRead() {
  const lista = [
    { titulo: "Milk and honey", autor: "Rupi Kaur" },
    { titulo: "Habitos Atomicos", autor: "James Clear" },
    { titulo: "El Faro del FIn del Mundo", autor: "Julio Verne" },
  ];

  return (
    <div className="want-to-read">
      <h2>Quiero leer</h2>

      {lista.map((libro, index) => (
        <div key={index} className="item">
          <p className="titulo">{libro.titulo}</p>
          <p className="autor">by {libro.autor}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
