import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import FeaturedDishes from "./components/FeaturedDishes";

function App() {
  return (
    <div className="font-size">
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <About />
      <Footer />
    </div>
  );
}

export default App;