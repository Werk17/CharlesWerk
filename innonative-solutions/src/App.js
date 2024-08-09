import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./App.css";
import ServicesPage from "./components/ServicesPage";
import BlogLanding from "./components/BlogLanding";
import BlogPostPage from "./components/BlogPostPage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-work" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogLanding />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
