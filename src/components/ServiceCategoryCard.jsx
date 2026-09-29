function ServiceCategoryCard({ icon, title, description }) {
  return (
    <div className="service-category-card">
      <div className="service-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <a href="#services" className="service-link">
        Explore
      </a>
    </div>
  );
}

export default ServiceCategoryCard;