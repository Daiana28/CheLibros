import { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import GenFav from "../components/GenFav/GenFav";
import Hero from "../components/Main/Hero/Hero";

import "./Libros.css";

export default function Libros() {
  const libros = [
    { id: 1, titulo: "Milk and Honey", autor: "Rupi Kaur" },
    { id: 2, titulo: "The Sun and Her Flowers", autor: "Rupi Kaur" },
    { id: 3, titulo: "It Ends With Us", autor: "Colleen Hoover" },
    { id: 4, titulo: "El Principito", autor: "Antoine de Saint-Exupéry" },
  ];

  const [filtered, setFiltered] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearchClick = (query) => {
    const q = query.toLowerCase();
    const results = libros.filter(
      (libro) =>
        libro.titulo.toLowerCase().includes(q) ||
        libro.autor.toLowerCase().includes(q)
    );

    setFiltered(results);
    setHasSearched(true);
  };

  return (
    <>
      <div className="libros-container">
        <h1>Buscar Libros</h1>

        <SearchBar onSearchClick={handleSearchClick} />

        {hasSearched && (
          <ul className="resultados">
            {filtered.length > 0 ? (
              filtered.map((libro) => (
                <li key={libro.id}>
                  <strong>{libro.titulo}</strong> — {libro.autor}
                </li>
              ))
            ) : (
              <p>No se encontraron resultados</p>
            )}
          </ul>
        )}
      </div>

      <GenFav />
      <Hero />
    </>
  );
}
