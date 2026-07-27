import About from "./components/About";
import BackgroundFX from "./components/BackgroundFX";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
