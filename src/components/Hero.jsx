import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Hero.css";
import logo from "../assets/Logo.png";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero">
      {/* NAVBAR */}
      <AppBar
        position="fixed"
        elevation={0}
        className={`hero-nav ${scrolled ? "nav-solid" : ""}`}
      >
        <Toolbar className="nav-inner">
          {/* LEFT: LOGO */}
          <img src={logo} alt="Keystone Home Tech" className="nav-logo" />

          {/* RIGHT SIDE */}
          <Box className="nav-right">
            {/* DESKTOP LINKS */}
            <Box className="hero-links desktop-only">
              <a href="#services" className="nav-link">Services</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#area" className="nav-link">Service Area</a>
              <button className="nav-cta">Request Service</button>
            </Box>

            {/* MOBILE MENU */}
            <IconButton
              className="mobile-only"
              onClick={() => setOpen(true)}
            >
              <MenuIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box className="mobile-drawer">
          <a onClick={() => setOpen(false)} href="#services">Services</a>
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#area">Service Area</a>
          <Button
            variant="contained"
            className="drawer-cta"
            onClick={() => setOpen(false)}
          >
            Request Service
          </Button>
        </Box>
      </Drawer>

      {/* HERO CONTENT */}
      <div className="container hero-content">
        <span className="eyebrow">Handyman Services</span>

        <h1>
          Reliable Home Services <br />
          Done Right the First Time
        </h1>

        <p>
          Furniture assembly, TV mounting, wall installations, and home
          improvements by a trusted local expert.
        </p>

        <div className="hero-actions">
          <button className="primary-btn">Call / Text for Estimate</button>
          <button className="secondary-btn">Request Service</button>
        </div>

        <div className="hero-features">
          <div className="feature">
            <span className="check">✓</span> Local Services
          </div>
          <div className="separator">|</div>
          <div className="feature">
            <span className="check">✓</span> Upfront Pricing
          </div>
          <div className="separator">|</div>
          <div className="feature">
            <span className="check">✓</span> Trusted Experts
          </div>
        </div>
      </div>
    </section>
  );
}
