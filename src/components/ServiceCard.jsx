function ServiceCard({ image, title, price }) {
  return (
    <div className="home-service-card">

      <div className="home-service-image">
        <img src={image} alt={title} />
      </div>

      <div className="home-service-content">
        <h3>{title}</h3>

        <div className="home-service-bottom">
          <span>From R{price}</span>

          <span className="service-arrow">→</span>
        </div>
      </div>

    </div>
  );
}

export default ServiceCard;
