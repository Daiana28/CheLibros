import "./Hero.css";
import HeroImg from "../../../assets/images/HeroImg.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1>
          Nuestro top 5 en <span>CheLibros</span>
        </h1>
        <p>
          ¿No sabes que leer? Tranqui la gente estuvo votando libros este mes.
        </p>
        <div className="hero__cta">
          <button>Ver más</button>
        </div>
      </div>

      <div className="hero__image">
        <img src={HeroImg} alt="3 Libros destacados" className="header__img" />
      </div>
    </section>
  );
}
