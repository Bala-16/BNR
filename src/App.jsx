import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navbar/Nav";
import Home from "./Components/Home/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";
// import Demo from "./Components/Project/demo"
// import Project from "./Components/Project/Project";

import JSW from "./Components/Project/JSW";
import FI from "./Components/Project/FI";
import MFW from "./Components/Project/MFW";
import SCR from "./Components/Project/SCR";
import PUF from "./Components/Project/PUF";
import MS from "./Components/Project/MS";
import AVF from "./Components/Project/AVF";
import LSA from "./Components/Project/LSA";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/project/1" element={<JSW />} />
        <Route path="/project/2" element={<FI />} />
        <Route path="/project/3" element={<MFW />} />
        <Route path="/project/4" element={<SCR />} />
        <Route path="/project/5" element={<PUF />} />
        <Route path="/project/6" element={<MS />} />
        <Route path="/project/7" element={<AVF />} />
        <Route path="/project/8" element={<LSA />} />

        <Route path="/project/avf" element={<AVF />} />
         <Route path="/project/lsa" element={<LSA />} />
         <Route path="/project/fi" element={<FI />} />
         <Route path="/project/jsw" element={<JSW />} />
         <Route path="/project/mfw" element={<MFW />} />
         <Route path="/project/puf" element={<PUF />} />
         <Route path="/project/scr" element={<SCR />} />
         <Route path="/project/ms" element={<MS />} />

      </Routes>


      {/* <Demo /> */}

      <Footer />
    </Router>
  );
}

export default App;
