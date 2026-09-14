import { useState } from "react";
import { Usuario } from "../types/Usuario";

interface RegistroProps {
    onRegistered: (usuario: Usuario) => void;
}

function Registro({ onRegistered }: RegistroProps) {

    const [usuario, setUsuario] = useState<Usuario>({
        name: "",
        email: "",
        password: ""
    });

    const [confirmPassword, setConfirmarPassword] = useState("");
    const criterios = [usuario.password.length >= 8, /[A-Z]/.test(usuario.password), /[0-9]/.test(usuario.password), /[^A-Za-z0-9]/.test(usuario.password)];
    const nivelSeguridad = criterios.filter(Boolean).length;

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

        onRegistered(usuario);
    }

    return (
        <section className="form-page"><div className="form-intro"><p className="eyebrow">Tu viaje comienza aquí</p><h1>Haz espacio<br /><em>para lo inesperado.</em></h1><p>Guarda tus rutas favoritas y recibe ideas para tu próxima escapada.</p></div><div className="form-card"><div className="form-heading"><span>02 / 02</span><h2>Crear cuenta</h2><p>Todos los campos son obligatorios.</p></div><form onSubmit={registrarUsuario}><label>Nombre completo<input type="text" placeholder="Ej. Ana Torres" value={usuario.name} onChange={(e) => setUsuario({ ...usuario, name: e.target.value })} /></label><label>Correo electrónico<input type="email" placeholder="tu@correo.com" value={usuario.email} onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} /></label><label>Contraseña<input type="password" placeholder="Mínimo 8 caracteres" value={usuario.password} onChange={(e) => setUsuario({ ...usuario, password: e.target.value })} /></label><div className="password-meter" aria-live="polite"><div className="meter-bars">{[1, 2, 3, 4].map((barra) => <i className={barra <= nivelSeguridad ? `level-${nivelSeguridad}` : ""} key={barra} />)}</div><span>{nivelSeguridad < 2 ? "Débil" : nivelSeguridad < 4 ? "En progreso" : "Segura"}</span></div><p className="hint">Usa mayúscula, número y símbolo para una contraseña segura.</p><label>Confirmar contraseña<input type="password" placeholder="Repite tu contraseña" value={confirmPassword} onChange={(e) => setConfirmarPassword(e.target.value)} /></label><button className="button button-dark form-submit" type="submit">Registrarme <span>↗</span></button></form></div></section>
    );
}

export default Registro;