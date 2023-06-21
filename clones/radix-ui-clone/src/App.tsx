import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import CaseStudies from "./components/CaseStudiesSection/CaseStudies";

const App = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-4 min-h-screen min-w-screen px-10 py-10">
      <Navbar />
      <div className="flex flex-col justify-evenly items-center gap-4 min-h-full min-w-screen">
        <Hero />
        <CaseStudies />
      </div>
      <Footer />
    </div>
  );
};

export default App;
