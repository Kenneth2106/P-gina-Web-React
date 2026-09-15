import React from "react";
import { useNavigate } from "react-router-dom";
import BgJugadores from "./BgJugadores.tsx";

const Inicio: React.FC = () => {
  const navigate = useNavigate();

  const savedUser = localStorage.getItem("usuario");
  const userData = savedUser ? JSON.parse(savedUser) : null;

  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #000428, #004e92)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <BgJugadores variante="inicio" />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(0,0,0,0.8)",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 25px #00ffcc",
          width: "500px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#00ffcc", marginBottom: "20px" }}>
          ⚽ Bienvenido {userData ? userData.name : "Usuario"}
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Has iniciado sesión correctamente. Este proyecto está inspirado en el mundo del fútbol,
          con un estilo futurista que refleja la pasión y energía de los estadios iluminados.
        </p>

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => navigate("/registro")}
            style={{
              marginRight: "15px",
              padding: "10px 20px",
              background: "#00ffcc",
              border: "none",
              borderRadius: "5px",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Crear nueva cuenta
          </button>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "10px 20px",
              background: "transparent",
              border: "1px solid #00ffcc",
              borderRadius: "5px",
              color: "#00ffcc",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Ir al Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;