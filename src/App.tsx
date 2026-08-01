import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedDishes from "./components/FeaturedDishes";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-size">
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <About />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;