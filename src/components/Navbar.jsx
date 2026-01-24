import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/Logo.png";
import "../styles/Hero.css"; // keep SAME CSS

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        className={`hero-nav ${scrolled ? "nav-solid" : ""}`}
      >
        <Toolbar className="nav-inner">
          {/* LOGO */}
        <Link to="/" style={{ textDecoration: "none" }}>

          <img src={logo} alt="Keystone Home Tech" className="nav-logo" />
        </Link>

          {/* RIGHT */}
          <Box className="nav-right">
            {/* DESKTOP */}
            <Box className="hero-links desktop-only">
              <Link to="/#services">Services</Link>

              <Link to="/about" className="nav-link">
                About Us
              </Link>

              <button className="nav-cta">Request Service</button>
            </Box>

            {/* MOBILE */}
            <IconButton className="mobile-only" onClick={() => setOpen(true)}>
              <MenuIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box className="mobile-drawer">
          <a onClick={() => setOpen(false)} href="#services">Services</a>

          <Link to="/about" onClick={() => setOpen(false)}>
            About Us
          </Link>

          <Button
            variant="contained"
            className="drawer-cta"
            onClick={() => setOpen(false)}
          >
            Request Service
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
