import { useState } from "react";
import { Usuario } from "../types/Usuario";

type Vista = "inicio" | "registro" | "login";
interface LoginProps { usuarioRegistrado: Usuario | null; onLogin: () => void; onNavigate: (vista: Vista) => void; }

function Login({ usuarioRegistrado, onLogin, onNavigate }: LoginProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function iniciarSesion(evento: React.FormEvent) {
		evento.preventDefault();
		if (!email.trim() || !password) { alert("Completa tu correo y contraseña"); return; }
		if (!usuarioRegistrado || usuarioRegistrado.email !== email || usuarioRegistrado.password !== password) { alert("Las credenciales no coinciden con un usuario registrado"); return; }
		onLogin();
	}

	return <section className="form-page login-page"><div className="form-intro"><p className="eyebrow">Qué bueno verte</p><h1>Vuelve a tu<br /><em>mejor juego.</em></h1><p>Retoma tus planes de entrenamiento y sigue mejorando dentro y fuera de la cancha.</p></div><div className="form-card"><div className="form-heading"><span>01 / 02</span><h2>Iniciar sesión</h2><p>Ingresa las credenciales de tu cuenta.</p></div><form onSubmit={iniciarSesion}><label>Correo electrónico<input type="email" placeholder="tu@correo.com" value={email} onChange={(evento) => setEmail(evento.target.value)} /></label><label>Contraseña<input type="password" placeholder="Tu contraseña" value={password} onChange={(evento) => setPassword(evento.target.value)} /></label><button className="button button-dark form-submit" type="submit">Entrar a la cancha <span>↗</span></button></form><p className="switch-form">¿Aún no tienes cuenta? <button onClick={() => onNavigate("registro")}>Regístrate</button></p></div></section>;
}

export default Login;
