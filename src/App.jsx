import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeServices from "./components/HomeServices";
import Services from "./components/Services";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <HomeServices />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;