import "./GenFav.css";

export default function GenFav() {
  return (
    <div className="genfav-container">
      <h1>Géneros Favoritos</h1>

      <div className="genfav-grid">
        <button className="genfav-btn">Romance</button>
        <button className="genfav-btn">Clasicos</button>
        <button className="genfav-btn">Autoayuda</button>
        <button className="genfav-btn">Ficción</button>
      </div>

      <button type="submit" className="search-more">
        Explorar todos los géneros
      </button>
    </div>
  );
}
