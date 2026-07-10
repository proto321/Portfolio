import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ChatBot from "./components/ChatBot";
import BackToTop from "./components/BackToTop";
import DebugChallenge from "./components/DebugChallenge";

import TypingTest from "./components/TypingTest";

export default function App() {
  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

         <TypingTest />
         <DebugChallenge />
        <BackToTop />
        <ChatBot />
      <Footer />
    </div>
  );
}