import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Location from "../components/Location";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Location />
      <Contact />
    </div>
  );
}
