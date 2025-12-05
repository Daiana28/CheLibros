import "./Club.css";

export default function Club() {
  return (
    <section className="club">
      <h2>Club de lectura</h2>

      <div className="club__text">
        <p>
          Un momento para compartir, <br />
          un hábito para mantener,
          <br />
          un hobbie para disfrutar.
        </p>
      </div>
      <div className="club__btn">
        <button>Quiero sumarme</button>
      </div>

      <a href="#" class="link-text">
        Ver más
      </a>
    </section>
  );
}
