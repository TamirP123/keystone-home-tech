import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ServiceAreaHighlight from "../components/ServiceAreaHighlight";
import Contact from "../components/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; 

export default function Home() {

   const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  
  return (
    <div className="hero-page">
      <Hero />
      <About />
      <ServiceAreaHighlight />
      <Contact />
    </div>
  );
}
