import { useState } from "react";
import "./App.css";
import bg from "./assets/image/telkom.jpeg";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Myprojects from "./components/Myprojects";
import Myactivities from "./components/Myactivities";
import Mycertificates from "./components/Mycertificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    {/* Halaman Home */}
      <div className="relative h-screen w-auto bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative flex flex-col items-center justify-center h-full space-y-2 mt-2">
            <div className="flex flex-row space-x-5 gabarito-medium text-2xl md:text-5xl ">
              <p className="text-white">Hello, <span className="text-yellow-500">I'm Albi</span> </p>
            </div>
            <p className="text-lg md:text-2xl gabarito-medium text-white">Fullstack Web Developer</p>
            <a href="#contact" className="bg-yellow-500 text-center text-white gabarito-medium text-md md:text-2xl px-3 py-2 md:px-6 md:py-4 rounded-full mt-3 shadow-lg shadow-yellow-500/60">
              Contact</a>
          </div>
        <Navbar />
      </div>

      {/* Halaman About Me */}
      <section id="about"><About /></section>

      {/* Halaman Projek Ku */}
      <section id="projects"><Myprojects /></section>

      {/* Halaman Kegiatan Ku */}
      <section id="activities"><Myactivities /></section>

      {/* Halaman Sertifikat Ku */}
      <section id="certificates"><Mycertificates /></section>

      {/* Halaman Kontak Ku */}
      <section id="contact"><Contact /></section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
