import ServiceCard from "./ServiceCard";

import nailsImage from "../assets/nails.jpg";
import toesImage from "../assets/toes.jpg";
import lashesImage from "../assets/lashes.jpg";
import microbladingImage from "../assets/microblading.jpg";

function HomeServices() {
  return (
    <section className="home-services">

      <div className="section-heading">
        <p>OUR SERVICES</p>

        <h2>Beauty Designed For You</h2>

        <span>
          Quality services. Beautiful results.
        </span>
      </div>

      <div className="home-services-grid">

        <ServiceCard
          image={nailsImage}
          title="Nails"
          price="120"
        />

        <ServiceCard
          image={toesImage}
          title="Toes"
          price="150"
        />

        <ServiceCard
          image={lashesImage}
          title="Lashes"
          price="130"
        />

        <ServiceCard
          image={microbladingImage}
          title="Microblading"
          price="1100"
        />

      </div>

    </section>
  );
}

export default HomeServices;