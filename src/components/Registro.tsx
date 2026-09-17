import { useState } from "react";
import { Usuario } from "../types/Usuario";
import { useNavigate } from "react-router-dom";
import BgMundial from "./BgMundial.tsx";

function Registro() {
  const [usuario, setUsuario] = useState<Usuario>({
    name: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmarPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  const calcularSeguridad = (password: string): number => {
    let score = 0;
    if (password.length >= 8) score += 25;
    if (/[A-Z]/.test(password)) score += 25;
    if (/[0-9]/.test(password)) score += 25;
    if (/[^A-Za-z0-9]/.test(password)) score += 25;
    return score;
  };

  function registrarUsuario(e: React.FormEvent) {
    e.preventDefault();

    if (usuario.name.trim() === "") {
      alert("El nombre es obligatorio");
      return;
    }

    if (usuario.email.trim() === "") {
      alert("El correo es obligatorio");
      return;
    }

    if (usuario.password.length < 8) {
      alert("La contraseña debe tener mínimo 8 caracteres");
      return;
    }

    if (usuario.password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Usuario registrado correctamente");
    navigate("/login");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <BgMundial />

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
          ⚽ Crear cuenta
        </h2>

        <form onSubmit={registrarUsuario}>
          <input
            type="text"
            placeholder="Nombre"
            value={usuario.name}
            onChange={(e) => setUsuario({ ...usuario, name: e.target.value })}
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
            type="email"
            placeholder="Correo"
            value={usuario.email}
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
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
            value={usuario.password}
            onChange={(e) => {
              const newPassword = e.target.value;
              setUsuario({ ...usuario, password: newPassword });
              setPasswordStrength(calcularSeguridad(newPassword));
            }}
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

          <div style={{ marginTop: "10px" }}>
            <progress value={passwordStrength} max="100" style={{ width: "100%" }}></progress>
            <span style={{ marginLeft: "10px" }}>
              {passwordStrength < 50 ? "Débil" : passwordStrength < 75 ? "Media" : "Segura"}
            </span>
          </div>

          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
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
            type="submit"
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
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;