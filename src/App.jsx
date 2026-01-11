import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
