type Vista = "inicio" | "registro" | "login";

interface InicioProps {
	sesionActiva: boolean;
	onNavigate: (vista: Vista) => void;
}

function Inicio({ sesionActiva, onNavigate }: InicioProps) {
	const planes = [
		{ nivel: "Base", titulo: "Primer toque", detalle: "Control, pase y conducción", sesiones: "3 sesiones / semana", color: "plan-green" },
		{ nivel: "Intermedio", titulo: "Mente de juego", detalle: "Técnica, velocidad y visión", sesiones: "4 sesiones / semana", color: "plan-orange" },
		{ nivel: "Avanzado", titulo: "Modo competencia", detalle: "Potencia, táctica y definición", sesiones: "5 sesiones / semana", color: "plan-dark" }
	];

	return (
		<>
			<section className="hero-section">
				<div className="hero-copy">
					<p className="eyebrow">Entrena. Juega. Evoluciona.</p>
					<h1>Tu mejor versión<br /><em>juega aquí.</em></h1>
					<p className="hero-text">Planes de entrenamiento para futbolistas que quieren convertir la pasión por el balón en disciplina, técnica y juego colectivo.</p>
					<div className="hero-actions"><button className="button button-dark" onClick={() => onNavigate(sesionActiva ? "inicio" : "registro")}>{sesionActiva ? "Ver mis planes" : "Empezar a entrenar"} <span>↗</span></button><a className="text-link" href="#planes">Ver planes <span>↓</span></a></div>
				</div>
				<div className="hero-art football-art" aria-label="Balón de fútbol sobre una cancha"><div className="stadium-sun" /><div className="pitch-lines" /><div className="football">⬡</div><div className="hero-note">01 / 03<br /><strong>Entrena con propósito</strong><br />Tu cancha. Tu ritmo.</div></div>
			</section>
			<section className="stats-strip"><div><strong>04</strong><span>niveles de progreso</span></div><div><strong>24/7</strong><span>entrenamiento a tu ritmo</span></div><div><strong>01</strong><span>objetivo: mejorar</span></div></section>
			<section className="philosophy-section" id="filosofia"><div className="section-label">/ NUESTRA FILOSOFÍA</div><div className="philosophy-content"><h2>El talento inspira.<br /><em>El trabajo transforma.</em></h2><p>Elegimos el fútbol porque enseña a crecer en equipo, tomar decisiones bajo presión y celebrar cada pequeño avance. Creamos planes claros para que cada entrenamiento tenga intención.</p><div className="values"><span>01 <b>Técnica</b></span><span>02 <b>Disciplina</b></span><span>03 <b>Equipo</b></span></div></div></section>
			<section className="plans-section" id="planes"><div className="section-label">/ PLANES DE ENTRENAMIENTO</div><div className="plans-heading"><h2>Encuentra tu<br /><em>punto de partida.</em></h2><p>Elige un plan según tu nivel actual. Puedes avanzar cuando estés listo.</p></div><div className="plans-grid">{planes.map((plan, index) => <article className={`plan-card ${plan.color}`} key={plan.nivel}><span className="plan-number">0{index + 1}</span><p className="plan-level">{plan.nivel}</p><h3>{plan.titulo}</h3><p>{plan.detalle}</p><span className="plan-sessions">{plan.sesiones}</span></article>)}</div></section>
			<section className="invite-section"><p className="eyebrow">Tu próximo entrenamiento</p><h2>La cancha te está esperando.</h2><button className="button button-outline" onClick={() => onNavigate("registro")}>Crear mi cuenta <span>↗</span></button></section>
		</>
	);
}

export default Inicio;
