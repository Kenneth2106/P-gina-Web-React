import React from "react";

const BgJugadores: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        background: "linear-gradient(135deg, #030a16, #0a192f, #1b002c)",
      }}
    >
      <style>{`
        @keyframes flotarMessi {
          0%, 100% { transform: translateY(0px); filter: drop-shadow(0 0 25px rgba(0, 210, 255, 0.8)); }
          50%       { transform: translateY(-16px); filter: drop-shadow(0 0 50px rgba(0, 210, 255, 1)); }
        }
        @keyframes flotarCR7 {
          0%, 100% { transform: translateY(0px); filter: drop-shadow(0 0 25px rgba(255, 0, 85, 0.8)); }
          50%       { transform: translateY(-16px); filter: drop-shadow(0 0 50px rgba(255, 0, 85, 1)); }
        }
        .img-messi {
          animation: flotarMessi 5.5s ease-in-out infinite;
        }
        .img-cr7 {
          animation: flotarCR7 6s ease-in-out infinite 0.5s;
        }
      `}</style>

      {/* Auras celestes y rojas */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "0%",
          width: "45vw",
          height: "60vh",
          background: "radial-gradient(circle, rgba(0, 210, 255, 0.15), transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "0%",
          width: "45vw",
          height: "60vh",
          background: "radial-gradient(circle, rgba(255, 0, 85, 0.15), transparent 70%)",
        }}
      />

      {/* 👑 IZQUIERDA: LIONEL MESSI */}
      <div
        style={{
          position: "absolute",
          left: "3vw",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <img
          src="/images/messi.png"
          alt="Lionel Messi #10"
          className="img-messi"
          style={{
            width: "clamp(240px, 24vw, 360px)",
            maxHeight: "70vh",
            objectFit: "contain",
            borderRadius: "20px",
          }}
        />
        <span
          style={{
            marginTop: "10px",
            color: "#00d2ff",
            fontWeight: "bold",
            fontSize: "1.2rem",
            letterSpacing: "3px",
            textShadow: "0 0 12px #00d2ff",
            textTransform: "uppercase",
          }}
        >
          👑 Lionel Messi #10
        </span>
      </div>

      {/* 👑 DERECHA: CRISTIANO RONALDO */}
      <div
        style={{
          position: "absolute",
          right: "3vw",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <img
          src="/images/cr7.png"
          alt="Cristiano Ronaldo SIUUU #7"
          className="img-cr7"
          style={{
            width: "clamp(240px, 24vw, 360px)",
            maxHeight: "70vh",
            objectFit: "contain",
            borderRadius: "20px",
          }}
        />
        <span
          style={{
            marginTop: "10px",
            color: "#ff0055",
            fontWeight: "bold",
            fontSize: "1.2rem",
            letterSpacing: "3px",
            textShadow: "0 0 12px #ff0055",
            textTransform: "uppercase",
          }}
        >
          🔥 CR7 - SIUUU #7
        </span>
      </div>
    </div>
  );
};

export default BgJugadores;