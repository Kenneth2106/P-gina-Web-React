import React from "react";

const BgMundial: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        background: "linear-gradient(135deg, #050e18, #0b1d3a, #162447)",
      }}
    >
      <style>{`
        @keyframes flotarCopa {
          0%, 100% { transform: translateY(0px); filter: drop-shadow(0 0 25px rgba(245, 197, 66, 0.8)); }
          50%       { transform: translateY(-15px); filter: drop-shadow(0 0 45px rgba(245, 197, 66, 1)); }
        }
        @keyframes flotarBalon {
          0%, 100% { transform: translateY(0px) rotate(0deg); filter: drop-shadow(0 0 25px rgba(0, 255, 204, 0.8)); }
          50%       { transform: translateY(-15px) rotate(10deg); filter: drop-shadow(0 0 45px rgba(255, 0, 127, 0.9)); }
        }
        .img-copa {
          animation: flotarCopa 5s ease-in-out infinite;
        }
        .img-balon {
          animation: flotarBalon 6s ease-in-out infinite 0.5s;
        }
      `}</style>

      {/* Resplandor dorado y cian de fondo */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "50vw",
          height: "50vh",
          background: "radial-gradient(circle, rgba(245, 197, 66, 0.15), transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "50vw",
          height: "50vh",
          background: "radial-gradient(circle, rgba(0, 255, 204, 0.15), transparent 70%)",
        }}
      />

      {/* 🏆 IZQUIERDA: COPA DEL MUNDO */}
      <div
        style={{
          position: "absolute",
          left: "4vw",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <img
          src="/images/copa.png"
          alt="Copa del Mundo FIFA"
          className="img-copa"
          style={{
            width: "clamp(220px, 22vw, 340px)",
            maxHeight: "65vh",
            objectFit: "contain",
            borderRadius: "20px",
          }}
        />
        <span
          style={{
            marginTop: "12px",
            color: "#f5c542",
            fontWeight: "bold",
            fontSize: "1.1rem",
            letterSpacing: "2px",
            textShadow: "0 0 10px #f5c542",
            textTransform: "uppercase",
          }}
        >
          🏆 Copa del Mundo
        </span>
      </div>

      {/* ⚽ DERECHA: BALÓN DEL MUNDIAL AL RIHLA */}
      <div
        style={{
          position: "absolute",
          right: "4vw",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <img
          src="/images/balon.png"
          alt="Balón Oficial Al Rihla Mundial"
          className="img-balon"
          style={{
            width: "clamp(220px, 22vw, 340px)",
            maxHeight: "65vh",
            objectFit: "contain",
            borderRadius: "20px",
          }}
        />
        <span
          style={{
            marginTop: "12px",
            color: "#00ffcc",
            fontWeight: "bold",
            fontSize: "1.1rem",
            letterSpacing: "2px",
            textShadow: "0 0 10px #00ffcc",
            textTransform: "uppercase",
          }}
        >
          ⚽ Balón Oficial Mundial
        </span>
      </div>
    </div>
  );
};

export default BgMundial;