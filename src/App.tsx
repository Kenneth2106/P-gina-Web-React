import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Inicio from "./components/Inicio.tsx";
import Login from "./components/Login.tsx";
import Registro from "./components/Registro.tsx";
import Dashboard from "./components/Dashboard.tsx";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
