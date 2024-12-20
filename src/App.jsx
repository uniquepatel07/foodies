import "./App.css";
import banner from "./assets/Banner background.png"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero-section/Hero";
import About from "./components/About";
import WorkSection from "./components/WorkSection";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
      <Navbar />
        <img className="absolute top-0 right-0 w-[630px] h-[750px] z-0" src={banner} alt="banner" />
      </div>
      <Hero/>
      <About/>
      <WorkSection/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
