import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import AIChatbot from "./components/AIChatbot";
import Resume from "./components/Resume";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white pb-20">
        <Navbar />

        <div className="pt-20 flex flex-col w-full overflow-hidden"> {/* Padding for fixed Navbar */}
          <div id="home"><Hero /></div>
          <div id="about"><About /></div>
          <div id="skills"><Skills /></div>
          <div id="certificates"><Certificates /></div>
          <div id="projects"><Projects /></div>
          <div id="resume"><Resume /></div>
        </div>

        <AIChatbot />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
