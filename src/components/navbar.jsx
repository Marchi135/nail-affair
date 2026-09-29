function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>NAIL AFFAIR</span>
        <small>NAILS • LASHES • BEAUTY</small>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#booking">Booking</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#booking" className="book-btn">
        Book Now
      </a>
    </nav>
  );
}

export default Navbar;