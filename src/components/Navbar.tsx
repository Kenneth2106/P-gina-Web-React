import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 30px",
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #00ffcc33",
      }}
    >
      <span style={{ color: "#00ffcc", fontWeight: "bold", fontSize: "20px" }}>
        ⚽ FútbolApp
      </span>
      <div style={{ display: "flex", gap: "12px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "transparent",
            border: "1px solid #00ffcc",
            borderRadius: "5px",
            color: "#00ffcc",
            padding: "6px 14px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <button
          onClick={() => navigate("/registro")}
          style={{
            background: "#00ffcc",
            border: "none",
            borderRadius: "5px",
            color: "#000",
            fontWeight: "bold",
            padding: "6px 14px",
            cursor: "pointer",
          }}
        >
          Registro
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
