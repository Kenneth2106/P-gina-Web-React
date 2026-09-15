import "./App.css";
import Inicio from "./components/Inicio.tsx";

function App() {
    return (
        <div className="app-shell">
            <main>
                <Inicio />
            </main>
            <footer className="site-footer">
                <span>RUMBO / fútbol con intención</span>
                <span>Entrena. Juega. Evoluciona.</span>
            </footer>
        </div>
    );
}

export default App;