import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

        <div className="pt-20"> {/* Padding for fixed Navbar */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>

        <AIChatbot />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
