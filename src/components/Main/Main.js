import Hero from "./Hero/Hero";
import Club from "./Club/Club";
import Carousel from "./Carousel/Carousel";
import Newsletter from "./Newsletter/Newsletter";
import "./Main.css";

export default function Main() {
  return (
    <main>
      <Hero />

      <div className="container">
        <div className="layout-20-80">
          <div className="col-20">
            <Club />
          </div>

          <div className="col-80">
            <Carousel />
          </div>
        </div>
      </div>
      <Newsletter />
    </main>
  );
}
