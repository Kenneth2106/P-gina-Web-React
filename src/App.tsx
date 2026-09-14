import { useState } from "react";
import "./App.css";
import Inicio from "./components/Inicio.tsx";
import Login from "./components/Login.tsx";
import Navbar from "./components/Navbar.tsx";
import Registro from "./components/Registro.tsx";
import { Usuario } from "./types/Usuario";

type Vista = "inicio" | "registro" | "login";

function App() {
    const [vista, setVista] = useState<Vista>("login");
    const [usuario, setUsuario] = useState<Usuario | null>(() => {
        const usuarioGuardado = localStorage.getItem("rumbo-usuario");
        return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
    });
    const [sesionActiva, setSesionActiva] = useState(false);

    function guardarUsuario(nuevoUsuario: Usuario) {
        setUsuario(nuevoUsuario);
        localStorage.setItem("rumbo-usuario", JSON.stringify(nuevoUsuario));
        setVista("login");
    }

    function cerrarSesion() {
        setSesionActiva(false);
        setVista("login");
    }

    return (
        <div className="app-shell">
            {sesionActiva && <Navbar vista={vista} sesionActiva={sesionActiva} onNavigate={setVista} onLogout={cerrarSesion} />}
            <main>
                {vista === "inicio" && <Inicio sesionActiva={sesionActiva} onNavigate={setVista} />}
                {vista === "registro" && <Registro onRegistered={guardarUsuario} />}
                {vista === "login" && <Login usuarioRegistrado={usuario} onLogin={() => { setSesionActiva(true); setVista("inicio"); }} onNavigate={setVista} />}
            </main>
            <footer className="site-footer">
                <span>RUMBO / fútbol con intención</span>
                <span>Entrena. Juega. Evoluciona.</span>
            </footer>
        </div>
    );
}

export default App;