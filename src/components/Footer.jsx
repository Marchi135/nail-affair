import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">

        {/* SALON BRAND */}
        <div>
          <h3>NAIL AFFAIR</h3>
          <p>Luxury Nails. Beautiful You.</p>
        </div>

        {/* CONTACT INFORMATION */}
        <div>
          <h4>Contact Us</h4>

          {/* CLICK TO CALL */}
          <a href="tel:+27652962587">
            📞 065 296 2587
          </a>

          {/* CLICK TO WHATSAPP */}
          <a
            href="https://wa.me/27652962587"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp
          </a>

          {/* CLICK TO VIEW LOCATION */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=85+Woburn+Avenue%2C+Benoni%2C+Gauteng%2C+South+Africa"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 85 Woburn Avenue, Benoni, Gauteng. South Africa
          </a>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Nail Affair.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
