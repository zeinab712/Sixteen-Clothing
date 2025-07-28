import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename="/">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h2 className="p-[23vh] mt-30 font-bold text-xl text-neutral-800 text-center w-full px-4">Not Found (404 Page)</h2>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
