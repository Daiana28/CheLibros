import { useState } from "react";
import "./PerfilHeader.css";

export default function PerfilHeader() {
  const [name, setName] = useState("Tu Nombre");
  const [about, setAbout] = useState("Sobre mí...");
  const [editingName, setEditingName] = useState(false);
  const [editingAbout, setEditingAbout] = useState(false);
  const [profileImg, setProfileImg] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(URL.createObjectURL(file));
    }
  };

  return (
    <div className="perfil-header">
      {/* FOTO + INPUT INVISIBLE */}
      <label className="perfil-header__img-wrapper">
        {profileImg ? (
          <img src={profileImg} alt="profile" className="perfil-header__img" />
        ) : (
          <div className="perfil-header__placeholder">Subir foto</div>
        )}
        <input type="file" onChange={handleImageChange} hidden />
      </label>

      <div className="perfil-header__info">
        {/* Nombre */}
        {editingName ? (
          <input
            value={name}
            onChange={(e) => {
              if (e.target.value.length <= 20) setName(e.target.value);
            }}
            onBlur={() => setEditingName(false)}
            autoFocus
            className="perfil-header__input"
          />
        ) : (
          <h2
            onClick={() => setEditingName(true)}
            className="perfil-header__title"
          >
            {name}
          </h2>
        )}

        {/* Sobre mí */}
        {editingAbout ? (
          <textarea
            value={about}
            onChange={(e) => {
              if (e.target.value.length <= 120) setAbout(e.target.value);
            }}
            onBlur={() => setEditingAbout(false)}
            autoFocus
            className="perfil-header__textarea"
          />
        ) : (
          <p
            onClick={() => setEditingAbout(true)}
            className="perfil-header__about"
          >
            {about}
          </p>
        )}

        {/* CONTADORES (mantengo estilo anterior más visual) */}
        <div className="perfil-header__stats">
          <div className="stat-card">
            <span className="stat-number">12</span>
            <span className="stat-label">Leídos</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">03</span>
            <span className="stat-label">Leyendo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
