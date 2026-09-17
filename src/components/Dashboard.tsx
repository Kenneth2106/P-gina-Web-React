import React, { useState } from "react";

const Dashboard: React.FC = () => {
  // Estado para el torneo
  const [showTournamentForm, setShowTournamentForm] = useState(false);
  const [players, setPlayers] = useState<string[]>([]);
  const [newPlayer, setNewPlayer] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  // Estado para el alquiler de canchas
  const [selectedField, setSelectedField] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleAddPlayer = () => {
    if (newPlayer.trim() !== "" && players.length < 10) {
      setPlayers([...players, newPlayer.trim()]);
      setNewPlayer("");
    }
  };

  const handleRemovePlayer = (index: number) => {
    setPlayers(players.filter((_: string, i: number) => i !== index));
  };

  const handleRegisterTournament = (e: React.FormEvent) => {
    e.preventDefault();
    if (players.length >= 8 && players.length <= 10) {
      setIsRegistered(true);
      setShowTournamentForm(false);
    } else {
      alert("Debes inscribir entre 8 y 10 jugadores (5 titulares, 3-5 suplentes).");
    }
  };

  const handleRentField = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedField && selectedTime) {
      alert(`Cancha ${selectedField} reservada para el horario de ${selectedTime}`);
      setSelectedField("");
      setSelectedTime("");
    } else {
      alert("Por favor selecciona una cancha y un horario.");
    }
  };

  const cardStyle = {
    background: "rgba(0,0,0,0.6)",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 15px #00ffcc",
    marginBottom: "40px",
    color: "#fff",
  };

  const buttonStyle = {
    padding: "10px 20px",
    background: "#00ffcc",
    border: "none",
    borderRadius: "5px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #00ffcc",
    borderRadius: "5px",
    background: "#111",
    color: "#fff",
  };

  return (
    <div style={{ padding: "40px 10vw", maxWidth: "1200px", margin: "0 auto", marginTop: "40px" }}>
      <h1 style={{ color: "#00ffcc", marginBottom: "40px", textAlign: "center" }}>Mi Panel</h1>

      {/* 1. Planes de Entrenamiento */}
      <section style={cardStyle}>
        <h2 style={{ color: "#00ffcc", borderBottom: "1px solid #00ffcc", paddingBottom: "10px" }}>
          Planes de Entrenamiento
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "20px" }}>
          <div style={{ background: "#111", padding: "20px", borderRadius: "8px", border: "1px solid #333" }}>
            <h3 style={{ color: "#d7ed61" }}>Diario</h3>
            <p style={{ fontSize: "14px", color: "#ccc" }}>Acceso a una sesión individual de entrenamiento asistido.</p>
            <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px" }}>$15.000 COP</p>
          </div>
          <div style={{ background: "#111", padding: "20px", borderRadius: "8px", border: "1px solid #333" }}>
            <h3 style={{ color: "#00ffcc" }}>Semanal</h3>
            <p style={{ fontSize: "14px", color: "#ccc" }}>Entrenamiento intensivo programado durante una semana.</p>
            <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px" }}>$40.000 COP</p>
          </div>
          <div style={{ background: "#111", padding: "20px", borderRadius: "8px", border: "1px solid #333" }}>
            <h3 style={{ color: "#e96e39" }}>Mensual</h3>
            <p style={{ fontSize: "14px", color: "#ccc" }}>Acceso ilimitado al plan mensual de entrenamiento regular.</p>
            <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px" }}>$100.000 COP</p>
          </div>
        </div>
      </section>

      {/* 2. Torneos de Fútbol 5 */}
      <section style={cardStyle}>
        <h2 style={{ color: "#00ffcc", borderBottom: "1px solid #00ffcc", paddingBottom: "10px" }}>
          Torneos de Fútbol 5
        </h2>
        <p style={{ marginTop: "15px" }}>
          Participa en nuestros torneos competitivos. Formato: 5 titulares, mínimo 3 suplentes, máximo 5 suplentes.
        </p>
        <p style={{ fontWeight: "bold", fontSize: "18px", margin: "10px 0" }}>Costo: $30.000 COP por equipo</p>

        {isRegistered ? (
          <div style={{ padding: "15px", background: "rgba(0, 255, 204, 0.2)", border: "1px solid #00ffcc", borderRadius: "5px", marginTop: "20px", textAlign: "center", fontWeight: "bold", color: "#00ffcc" }}>
            ¡Inscripción realizada!
          </div>
        ) : (
          <div style={{ marginTop: "20px" }}>
            {!showTournamentForm ? (
              <button style={buttonStyle} onClick={() => setShowTournamentForm(true)}>
                Inscribir equipo
              </button>
            ) : (
              <div style={{ background: "#111", padding: "20px", borderRadius: "8px", marginTop: "15px" }}>
                <h3>Formulario de Inscripción</h3>
                <p style={{ fontSize: "13px", color: "#aaa", marginBottom: "15px" }}>
                  Ingresa entre 8 y 10 jugadores. Actualmente: {players.length}
                </p>
                
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="text"
                    value={newPlayer}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPlayer(e.target.value)}
                    placeholder="Nombre del jugador"
                    style={{ ...inputStyle, margin: 0 }}
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && handleAddPlayer()}
                    disabled={players.length >= 10}
                  />
                  <button 
                    type="button" 
                    onClick={handleAddPlayer} 
                    style={{ ...buttonStyle, background: "#333", color: "#fff" }}
                    disabled={players.length >= 10}
                  >
                    Añadir
                  </button>
                </div>

                <ul style={{ marginTop: "15px", paddingLeft: "20px" }}>
                  {players.map((player: string, idx: number) => (
                    <li key={idx} style={{ marginBottom: "8px" }}>
                      {player} 
                      <button 
                        onClick={() => handleRemovePlayer(idx)} 
                        style={{ marginLeft: "10px", background: "none", border: "none", color: "#ff4444", cursor: "pointer", fontSize: "12px" }}
                      >
                        [Eliminar]
                      </button>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                  <button style={buttonStyle} onClick={handleRegisterTournament}>
                    Confirmar Inscripción
                  </button>
                  <button 
                    style={{ ...buttonStyle, background: "transparent", border: "1px solid #fff", color: "#fff" }} 
                    onClick={() => setShowTournamentForm(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* 3. Alquiler de Canchas */}
      <section style={cardStyle}>
        <h2 style={{ color: "#00ffcc", borderBottom: "1px solid #00ffcc", paddingBottom: "10px" }}>
          Alquiler de Canchas
        </h2>
        <form onSubmit={handleRentField} style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>Selecciona la cancha:</label>
            <select 
              value={selectedField} 
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedField(e.target.value)}
              style={inputStyle}
            >
              <option value="">-- Elige una cancha --</option>
              <option value="1">Cancha 1</option>
              <option value="2">Cancha 2</option>
              <option value="3">Cancha 3</option>
              <option value="4">Cancha 4</option>
              <option value="5">Cancha 5</option>
            </select>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>Selecciona el horario (Bloques de 2 horas):</label>
            <select 
              value={selectedTime} 
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedTime(e.target.value)}
              style={inputStyle}
            >
              <option value="">-- Elige un horario --</option>
              <option value="8-10">8:00 AM - 10:00 AM</option>
              <option value="10-12">10:00 AM - 12:00 PM</option>
              <option value="12-2">12:00 PM - 2:00 PM</option>
              <option value="2-4">2:00 PM - 4:00 PM</option>
              <option value="4-6">4:00 PM - 6:00 PM</option>
              <option value="6-8">6:00 PM - 8:00 PM</option>
            </select>
          </div>

          <button type="submit" style={buttonStyle}>
            Reservar Cancha
          </button>
        </form>
      </section>
    </div>
  );
};

export default Dashboard;
