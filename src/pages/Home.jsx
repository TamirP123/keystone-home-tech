import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ServiceAreaHighlight from "../components/ServiceAreaHighlight";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="hero-page">
      <Hero />
      <About />
      <ServiceAreaHighlight />
      <Contact />
    </div>
  );
}
