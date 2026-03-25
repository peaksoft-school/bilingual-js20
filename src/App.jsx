import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Switch from "./components/UI/Switch";
import Footer from "./layout/Footer";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Switch />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
