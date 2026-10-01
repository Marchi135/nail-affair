import services from "../data/services";
import ServicePriceCard from "../components/ServicePriceCard";

function Services() {
  return (
    <main className="services-page">

      <section className="services-page-header">
        <div>
          <p className="section-label">NAIL AFFAIR</p>

          <h1>Our Services</h1>

          <p>
            Premium beauty services tailored to you.
          </p>
        </div>
      </section>

      <section className="services-content">

        <div className="services-page-grid">
          {services.map((category) => (
            <ServicePriceCard
              key={category.category}
              category={category.category}
              icon={category.icon}
              image={category.image}
              services={category.services}
            />
          ))}
        </div>

      </section>

    </main>
  );
}

export default Services;