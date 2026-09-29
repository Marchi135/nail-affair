import services from "../data/services";
import ServicePriceCard from "./ServicePriceCard";

function Services() {
  return (
    <section className="services-section" id="services">

      <div className="section-heading">
        <p>OUR SERVICES</p>

        <h2>Beauty Designed For You</h2>

        <span>
          Explore our range of beauty services.
        </span>
      </div>

      <div className="services-grid">

        {services.map((serviceCategory) => (
          <ServicePriceCard
            key={serviceCategory.category}
            category={serviceCategory.category}
            services={serviceCategory.services}
          />
        ))}

      </div>

    </section>
  );
}

export default Services;

