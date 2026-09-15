import React from "react";

const BgEstadio: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage: `linear-gradient(to bottom, rgba(5, 11, 20, 0.4), rgba(5, 11, 20, 0.7)), url('/images/estadio.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{`
        @keyframes estadioLuces {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.7; }
        }
        .luces-estadio {
          animation: estadioLuces 4s ease-in-out infinite;
        }
      `}</style>
      
      {/* Capa de iluminación y luces neón adicionales */}
      <div
        className="luces-estadio"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 30%, rgba(0, 255, 204, 0.25), transparent 70%)",
        }}
      />
    </div>
  );
};

export default BgEstadio;
