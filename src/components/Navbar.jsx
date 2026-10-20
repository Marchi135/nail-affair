import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span>NAIL AFFAIR</span>
        <small>NAILS • LASHES • BEAUTY</small>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to="/booking" className="book-btn">
        Book Now
      </Link>

    </nav>
  );
}

export default Navbar;