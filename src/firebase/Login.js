// Login.js
import React, { useState } from "react";
import firebase from "./firebase";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Nuevo estado para el nombre de usuario
  const [error, setError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        onLogin(userCredential.user);
      })
      .catch((err) => {
        console.error("Error al iniciar sesión:", err);
        setError(
          "Credenciales inválidas. Por favor, verifica tu email y contraseña."
        );
      });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    // Crear el usuario
    firebase.auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;

        // Actualizar el perfil con el nombre de usuario
        return newUser.updateProfile({
          displayName: username
        }).then(() => {
          // Una vez actualizado, llama a onLogin
          onLogin(newUser);
        });
      })
      .catch((err) => {
        console.error("Error al registrar el usuario:", err);
        setError("Hubo un error al crear la cuenta. Intenta con otro email.");
      });
  };

  const handleCancelRegister = () => {
    // Limpiar campos y volver a modo inicio de sesión
    setIsRegistering(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setError(null);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        flexDirection: "column",
        position: "relative"
      }}
    >
      {/* Texto arriba centrado */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: 0, fontSize: 25 }}>株式会社 新井商運</h2>
        <h3 style={{ margin: 0, marginTop: "10px" }}>Contol System</h3>
      </div>

      <h1>{isRegistering ? "Crear Cuenta" : "Iniciar Sesión"}</h1>
      <form
        onSubmit={isRegistering ? handleSubmitRegister : handleSubmitLogin}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {isRegistering && (
          <input
            type="text"
            placeholder="  Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              marginBottom: "10px",
              color: "black",
              backgroundColor: "white",
              borderRadius: 3,
              height: 30,
              width: 280,
            }}
          />
        )}
        <input
          type="email"
          placeholder="  Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            marginBottom: "10px",
            color: "black",
            backgroundColor: "white",
            borderRadius: 3,
            height: 30,
            width: 280,
          }}
        />
        <input
          type="password"
          placeholder="  Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            marginBottom: "10px",
            color: "black",
            backgroundColor: "white",
            borderRadius: 3,
            height: 30,
          }}
        />
        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
        <button type="submit">
          {isRegistering ? "Registrarse" : "Entrar"}
        </button>
      </form>
      <div style={{ marginTop: "20px" }}>
        {isRegistering ? (
          <div style={{ textAlign: "center" }}>
            <p>
              ¿Ya tienes cuenta?{" "}
              <button
                onClick={() => setIsRegistering(false)}
                style={{
                  color: "white",
                  textDecoration: "underline",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Inicia Sesión
              </button>
            </p>
            <button
              onClick={handleCancelRegister}
              style={{
                marginTop: "10px",
                color: "white",
                textDecoration: "underline",
                background: "none",
                border: "1px solid white",
                borderRadius: 3,
                cursor: "pointer",
                padding: "5px 10px",
              }}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <p>
            ¿No tienes cuenta?{" "}
            <button
              onClick={() => setIsRegistering(true)}
              style={{
                color: "white",
                textDecoration: "underline",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Regístrate
            </button>
          </p>
        )}
      </div>

      {/* Texto abajo a la derecha */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          fontSize: "0.9em",
          color: "gray"
        }}
      >
        by Alejandro Sklar
      </div>
    </div>
  );
}

export default Login;
