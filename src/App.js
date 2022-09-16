import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Terms from "./components/Terms/Terms";
import Privacy from "./components/Pravicy/Privacy";
import DataDel from "./components/DataDel/DataDel";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="dataDel" element={<DataDel />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
