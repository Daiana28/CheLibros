import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Completa todos los campos");
      return;
    }

    setError("");
    alert("¡Inicio de sesión exitoso! (falso login)");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-column left">
          <h2>Bienvenido de nuevo</h2>
          <p>Ingresa tus datos para acceder a tu cuenta</p>
        </div>

        <div className="login-column right">
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="error">{error}</p>}

            <button type="submit">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
