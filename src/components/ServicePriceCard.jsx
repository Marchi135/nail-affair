function ServicePriceCard({ category, icon, image, services }) {
  return (
    <article className="service-price-card">

      <div className="service-card-top">
        <span className="service-card-icon">{icon}</span>

        <img
          src={image}
          alt={`${category} service`}
          className="service-card-image"
        />
      </div>

      <h2>{category}</h2>

      <div className="service-price-list">
        {services.map((service) => (
          <div className="service-price-row" key={service.name}>
            <span>{service.name}</span>
            <span>{service.price}</span>
          </div>
        ))}
      </div>

    </article>
  );
}

export default ServicePriceCard;