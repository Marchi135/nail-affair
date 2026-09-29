import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCategories from "./components/ServiceCategories";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <ServiceCategories />
      </main>

      <Footer />
    </>
  );
}

export default App;