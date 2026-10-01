import { useEffect, useState } from "react";

import hero1 from "../assets/hero/hero-1.jpg";
import hero2 from "../assets/hero/hero-2.jpg";
import hero3 from "../assets/hero/hero-3.jpg";

const heroImages = [hero1, hero2, hero3];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previousImage) => {
        return (previousImage + 1) % heroImages.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">

      <div className="hero-content">
        <p className="hero-subtitle">WELCOME TO</p>

        <h1>Nail Affair</h1>
b          
        <h2>Luxury Nails. Beautiful You.</h2>

        <p className="hero-text">
          Pamper yourself with premium nail, lash and beauty services.
          Look good, feel beautiful and leave feeling confident.
        </p>

        <a href="#booking" className="book-btn">
          Book Now
        </a>
      </div>

      <div className="hero-image">
        <img
          src={heroImages[currentImage]}
          alt="Nail Affair beauty services"
        />
      </div>

    </section>
  );
}

export default Hero;