
function ServiceSelection({
  availableServices,
  selectedServices,
  onToggleService,
  onContinue,
}) {
  const chosenServices = availableServices.filter((service) =>
    selectedServices.includes(service.id)
  );

  const totalPrice = chosenServices.reduce((total, service) => {
    const price = Number(
      String(service.price).replace(/[^\d.]/g, "")
    );

    return total + (Number.isFinite(price) ? price : 0);
  }, 0);

  return (
    <section className="service-selection">
      <div className="booking-step-heading">
        <p>STEP 01</p>
        <h2>Select Your Treatments</h2>
        <p>Choose one or more services for your appointment.</p>
      </div>

      <div className="booking-service-list">
        {availableServices.map((service) => (
          <label className="booking-service-item" key={service.id}>
            <input
              type="checkbox"
              checked={selectedServices.includes(service.id)}
              onChange={() => onToggleService(service.id)}
            />
<span className="booking-service-name">
  <small>{service.icon} {service.category}</small>
  <span>{service.name}</span>
</span>

            <strong>{service.price}</strong>
          </label>
        ))}
      </div>

      <div className="booking-selection-summary">
        <h3>Your Selection</h3>

        <p>
          {selectedServices.length} treatment(s) selected
        </p>

        <h3>Estimated Total: R{totalPrice}</h3>
        {chosenServices.some((service) =>
  String(service.price).includes("+")
) && (
  <p className="booking-price-note">
    * Some treatments have starting prices.
    The final price may vary depending on your chosen design.
  </p>
)}

        <button
          type="button"
          className="book-btn"
          disabled={selectedServices.length === 0}
          onClick={onContinue}
        >
          Continue to Date & Time
        </button>
      </div>
    </section>
  );
}

export default ServiceSelection;
