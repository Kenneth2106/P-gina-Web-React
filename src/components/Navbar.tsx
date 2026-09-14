type Vista = "inicio" | "registro" | "login";

interface NavbarProps {
	vista: Vista;
	sesionActiva: boolean;
	onNavigate: (vista: Vista) => void;
	onLogout: () => void;
}

function Navbar({ vista, sesionActiva, onNavigate, onLogout }: NavbarProps) {
	return (
		<header className="topbar">
			<button className="brand" onClick={() => onNavigate("inicio")} aria-label="Ir al inicio"><span className="brand-mark">R/</span><span>rumbo</span></button>
			<nav aria-label="Navegación principal">
				<button className={vista === "inicio" ? "nav-link active" : "nav-link"} onClick={() => onNavigate("inicio")}>Explorar</button>
				<a className="nav-link" href="#filosofia">Nuestra mirada</a>
				{sesionActiva ? <button className="nav-link" onClick={onLogout}>Cerrar sesión</button> : <button className={vista === "login" ? "nav-link active" : "nav-link"} onClick={() => onNavigate("login")}>Iniciar sesión</button>}
			</nav>
			{!sesionActiva && <button className="nav-cta" onClick={() => onNavigate("registro")}>Crear cuenta <span>↗</span></button>}
			{sesionActiva && <span className="member-pill"><i /> viajero activo</span>}
		</header>
	);
}

export default Navbar;
