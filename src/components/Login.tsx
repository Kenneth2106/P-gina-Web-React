import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BgEstadio from "./BgEstadio.tsx";

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedUsers = localStorage.getItem("usuarios_registrados");
    const legacyUser = localStorage.getItem("usuario");
    let usersList: any[] = savedUsers ? JSON.parse(savedUsers) : [];

    if (legacyUser && usersList.length === 0) {
      try {
        const parsedLegacy = JSON.parse(legacyUser);
        usersList.push(parsedLegacy);
        localStorage.setItem("usuarios_registrados", JSON.stringify(usersList));
      } catch (e) {}
    }

    if (usersList.length > 0) {
      const matchedUser = usersList.find(
        (u) =>
          u.email.toLowerCase() === usuario.trim().toLowerCase() &&
          u.password === password
      );

      if (matchedUser) {
        localStorage.setItem("usuario_activo", JSON.stringify(matchedUser));
        alert(`¡Bienvenido de nuevo, ${matchedUser.name}!`);
        navigate("/dashboard");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } else {
      alert("No hay usuarios registrados, por favor crea una cuenta primero");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #070e17, #0d1b2a, #1a2a6c)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <BgEstadio />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(0,0,0,0.8)",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 20px #00ffcc",
          width: "350px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#00ffcc" }}>
          🏟️ Acceso
        </h2>

        <input
          type="text"
          placeholder="Correo"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #00ffcc",
            borderRadius: "5px",
            background: "#111",
            color: "#fff",
          }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #00ffcc",
            borderRadius: "5px",
            background: "#111",
            color: "#fff",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            background: "#00ffcc",
            border: "none",
            borderRadius: "5px",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Iniciar Sesión
        </button>

        <p style={{ marginTop: "20px", textAlign: "center" }}>
          ¿No tienes cuenta?
          <button
            onClick={() => navigate("/registro")}
            style={{
              marginLeft: "10px",
              background: "transparent",
              border: "1px solid #00ffcc",
              borderRadius: "5px",
              color: "#00ffcc",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Registrarse
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;