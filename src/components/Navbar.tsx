import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  // Recupera el usuario activo desde localStorage
  const activeUserRaw = localStorage.getItem("usuario_activo");
  const userData = activeUserRaw ? JSON.parse(activeUserRaw) : null;

  const isDarkPage = true; // Define si el tema es oscuro

  // Función para cerrar sesión y redirigir al login
  const handleLogout = () => {
    localStorage.removeItem("usuario_activo");
    navigate("/login");
  };

  return (
    <header
      className="topbar-container"
      style={{
        // Estilos generales del header (posición, fondo, borde)
        position: isDarkPage ? "fixed" : "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: isDarkPage
          ? "rgba(5, 11, 20, 0.85)"
          : "var(--paper, #f2eee5)",
        backdropFilter: "blur(10px)",
        borderBottom: isDarkPage
          ? "1px solid rgba(0, 255, 204, 0.2)"
          : "1px solid rgba(23, 35, 29, 0.15)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          // Contenedor interno con logo y navegación
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "76px",
          padding: "0 4vw",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo principal con escudo y nombre del club */}
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {/* Icono circular con balón */}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#00ffcc",
              color: "#050e18",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'DM Mono', monospace",
              fontWeight: "bold",
              fontSize: "18px",
              boxShadow: "0 0 12px #00ffccaa",
            }}
          >
            ⚽
          </div>
          <span
            style={{
              color: isDarkPage ? "#ffffff" : "#17231d",
              fontWeight: 700,
              fontSize: "22px",
              letterSpacing: "-0.04em",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            FÚTBOLPRO CLUB
          </span>
        </button>

        {/* Navegación principal */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {userData ? (
            // Si hay usuario logueado: muestra Dashboard, nombre y botón de logout
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                onClick={() => navigate("/dashboard")}
                style={{
                  background: "rgba(0, 255, 204, 0.15)",
                  border: "1px solid #00ffcc",
                  color: "#00ffcc",
                  padding: "8px 14px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                📊 Dashboard
              </button>
              {/* Nombre del usuario activo */}
              <span
                style={{
                  color: isDarkPage ? "#00ffcc" : "#e96e39",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <i
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#78a044",
                    display: "inline-block",
                  }}
                />
                {userData.name}
              </span>
              {/* Botón para cerrar sesión */}
              <button
                onClick={handleLogout}
                style={{
                  background: "transparent",
                  border: isDarkPage
                    ? "1px solid #ff0055"
                    : "1px solid #e96e39",
                  color: isDarkPage ? "#ff0055" : "#e96e39",
                  padding: "8px 14px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            // Si NO hay usuario logueado: muestra Dashboard, login y registro
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <button
                onClick={() => navigate("/dashboard")}
                style={{
                  background: "transparent",
                  border: "1px solid #00ffcc",
                  color: "#00ffcc",
                  padding: "8px 14px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate("/login")}
                style={{
                  background: "none",
                  border: "none",
                  color: isDarkPage ? "#00ffcc" : "#17231d",
                  fontSize: "13px",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                Iniciar sesión
              </button>
              <button
                onClick={() => navigate("/registro")}
                style={{
                  background: isDarkPage ? "#00ffcc" : "#17231d",
                  color: isDarkPage ? "#050e18" : "#f2eee5",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "0.2s ease",
                }}
              >
                Crear cuenta <span>↗</span>
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
