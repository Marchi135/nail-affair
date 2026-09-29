import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCategories from "./components/ServiceCategories";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <ServiceCategories />
        <Services />
      </main>

      <Footer />
    </>
  );
}

export default App;