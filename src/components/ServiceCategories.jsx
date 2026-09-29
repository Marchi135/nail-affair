import ServiceCategoryCard from "./ServiceCategoryCard";

function ServiceCategories() {
  return (
    <section className="service-categories" id="services">

      <div className="section-heading">
        <p>EXPLORE OUR SERVICES</p>

        <h2>Beauty Designed For You</h2>

        <span>
          Quality services. Beautiful results.
        </span>
      </div>

      <div className="service-category-grid">

        <ServiceCategoryCard
          icon="💅"
          title="Nail Services"
          description="Beautiful nails designed to make you feel confident."
        />

        <ServiceCategoryCard
          icon="🦶"
          title="Toe Services"
          description="Give your toes the attention they deserve."
        />

        <ServiceCategoryCard
          icon="👁"
          title="Lash Services"
          description="Enhance your natural beauty with stunning lashes."
        />

        <ServiceCategoryCard
          icon="✨"
          title="Microblading"
          description="Beautifully defined brows tailored to you."
        />

      </div>

    </section>
  );
}

export default ServiceCategories;