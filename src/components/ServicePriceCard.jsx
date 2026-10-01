function ServicePriceCard({ category, services }) {
  return (
    <div className="service-price-card">

      <h3>{category}</h3>

      <div className="service-list">

        {services.map((service) => (
          <div
            className="service-item"
            key={service.name}
          >
            <span>{service.name}</span>

            <span>
              {service.price
                ? `R${service.price}`
                : "Price TBC"}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default ServicePriceCard;