import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter__card">
        <div>
          <h2>Newsletter</h2>
          <p>
            Enterate de todas las novedades, y mucha más data, para vos
            booklover.
          </p>
        </div>

        <form className="newsletter__form">
          <input type="email" placeholder="Tu email" />
          <button type="submit">Quiero recibir novedades</button>
        </form>
      </div>
    </section>
  );
}
