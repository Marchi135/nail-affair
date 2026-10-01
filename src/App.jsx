import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeServices from "./components/HomeServices";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <HomeServices />
      </main>

      <Footer />
    </>
  );
}

export default App;