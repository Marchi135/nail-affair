import ServicePriceCard from "../components/ServicePriceCard";
import services from "../data/services";

function Services() {
  return (
    <main className="services-page">

      <section className="services-header">
        <p>NAIL AFFAIR</p>

        <h1>Our Services</h1>

        <p className="services-intro">
          Discover our range of beauty services designed to
          make you feel confident, beautiful and cared for.
        </p>
      </section>

      <section className="services-list-section">

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

    </main>
  );
}

export default Services;