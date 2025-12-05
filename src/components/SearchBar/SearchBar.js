import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearchClick }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchClick(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-wrapper">
      <input
        type="text"
        placeholder="Buscar por libro o autor..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      <button type="submit" className="search-btn">
        Buscar
      </button>
    </form>
  );
}
