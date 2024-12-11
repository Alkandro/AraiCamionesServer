import React, { useState } from "react";
import firebase from "./firebase"; 

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    firebase.auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Usuario creado y autenticado
        setSuccess("Usuario registrado con éxito. Ya puedes iniciar sesión.");
        setError(null);
      })
      .catch(err => {
        console.error("Error al registrar el usuario:", err);
        setError("Hubo un problema al crear el usuario. Inténtalo de nuevo.");
        setSuccess(null);
      });
  };

  return (
    <div style={{ 
      backgroundColor: "black", 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      color: "white",
      flexDirection: "column"
    }}>
      <h1>Registrarse</h1>
      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column" }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          style={{ marginBottom: "10px" }}
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={e => setPassword(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
        {success && <p style={{ color: "green", marginBottom: "10px" }}>{success}</p>}
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
}

export default Register;
