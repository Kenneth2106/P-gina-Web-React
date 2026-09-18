import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Inicio from "./components/Inicio.tsx";
import Login from "./components/Login.tsx";
import Registro from "./components/Registro.tsx";
import Dashboard from "./components/Dashboard.tsx";
import "./App.css";

// Componente principal de la aplicación
const App: React.FC = () => {
  return (
    // Envolvemos toda la app con BrowserRouter para manejar rutas
    <BrowserRouter>
      <div className="app-shell">
        {/* Barra de navegación fija en todas las páginas */}
        <Navbar />

        {/* Definición de rutas */}
        <Routes>
          {/* Página de inicio */}
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />

          {/* Página de login */}
          <Route path="/login" element={<Login />} />

          {/* Página de registro */}
          <Route path="/registro" element={<Registro />} />

          {/* Página del dashboard (usuario logueado) */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
