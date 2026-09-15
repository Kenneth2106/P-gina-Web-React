import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.tsx";
import Inicio from "./components/Inicio.tsx";
import Registro from "./components/Registro.tsx";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Inicio sesionActiva={false} onNavigate={function (vista: "inicio" | "registro" | "login"): void {
          throw new Error("Function not implemented.");
        } } />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
