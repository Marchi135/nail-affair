import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the menu when a customer selects a page
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <span>NAIL AFFAIR</span>
        <small>NAILS • LASHES • BEAUTY</small>
      </div>

      {/* HAMBURGER BUTTON */}
      <button
        type="button"
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* NAVIGATION LINKS */}
      <div
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>

        <Link to="/booking" onClick={closeMenu}>
          Booking
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        {/* MOBILE BOOKING BUTTON */}
        <Link
          to="/booking"
          className="mobile-book-btn"
          onClick={closeMenu}
        >
          Book Now
        </Link>
      </div>

      {/* DESKTOP BOOKING BUTTON */}
      <Link to="/booking" className="book-btn">
        Book Now
      </Link>

    </nav>
  );
}

export default Navbar;