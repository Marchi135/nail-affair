import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeServices from "./components/HomeServices";
import BookAppointment from "./components/BookAppointment";
import ContactStrip from "./components/ContactStrip";
import Services from "./components/Services";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <HomeServices />
      <BookAppointment />
      <ContactStrip />
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