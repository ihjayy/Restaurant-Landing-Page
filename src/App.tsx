import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedDishes from "./components/FeaturedDishes";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-size">
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;