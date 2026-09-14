import { useState } from "react";
import { Usuario } from "../types/Usuario";

function Registro() {

    const [usuario, setUsuario] = useState<Usuario>({
        name: "",
        email: "",
        password: ""
    });

    const [confirmPassword, setConfirmarPassword] = useState("");

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

        alert("Usuario registrado correctamente");
    }

    return (
        <div>

            <h2>Crear cuenta</h2>

            <form onSubmit={registrarUsuario}>

                <input
                    type="text"
                    placeholder="Nombre"
                    value={usuario.name}
                    onChange={(e) =>
                        setUsuario({
                            ...usuario,
                            name: e.target.value
                        })
                    }
                />

                <input
                    type="email"
                    placeholder="Correo"
                    value={usuario.email}
                    onChange={(e) =>
                        setUsuario({
                            ...usuario,
                            email: e.target.value
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={usuario.password}
                    onChange={(e) =>
                        setUsuario({
                            ...usuario,
                            password: e.target.value
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    value={confirmPassword}
                    onChange={(e) =>
                        setConfirmarPassword(e.target.value)
                    }
                />

                <button type="submit">
                    Registrarse
                </button>

            </form>

        </div>
    );
}

export default Registro;