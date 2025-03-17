import "./App.css";
import AboutSection from "./components/AboutSection";
import NavBar from "./components/common/NavBar";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import TeamMembers from "./components/TeamMembers";
import { Testimonials } from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      {/* <TeamMembers />
      <Testimonials /> */}
      <Products />
      {/* <div className="parent grid grid-cols-2 grid-rows-2 gap-2">
        <div className="div1">1</div>
        <div className="div2 row-span-2">2</div>
        <div className="div3">3</div>
      </div> */}
    </main>
    </>
    
  );
}

export default App;
