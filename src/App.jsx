import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeServices from "./components/HomeServices";
import BookAppointment from "./components/BookAppointment";
import ContactStrip from "./components/ContactStrip";
import Services from "./components/Services";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
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
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;