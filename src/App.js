// App.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import firebase, { FirebaseContext } from "./firebase";

import NuevoPlatillo from "./components/paginas/NuevoPlatillo";
import Sidebar from "./components/ui/Sidebar";

import {
  HoshinoRoutes,
  MatsushimaRoutes,
  TomaokaRoutes,
  OishiRoutes,
  OkamotoRoutes,
  YamakadoRoutes,
  SklarRoutes,
  EnriqueRoutes,
  User1Routes,
  User2Routes,
  User3Routes,
} from "./components/ui/routes";

import EditUserRoutes from "./components/ui/EditUserRoutes";
import Login from "./firebase/Login";

function App() {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  // Escucha cambios en el estado de auth
  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((usuarioFirebase) => {
      if (usuarioFirebase) {
        setUser(usuarioFirebase);
      } else {
        setUser(null);
      }
      setInitializing(false);
    });
    return () => unsubscribe();
  }, []);

  if (initializing) {
    return (
      <div 
        style={{
          background: "black",
          height: "100vh",
          color: "white",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>
        Cargando...
      </div>
    );
  }

  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {user ? (
        <div className="h-screen flex">
          <Sidebar />
          <div className="flex-1 overflow-y-auto p-6">
            <Routes>
              {HoshinoRoutes}
              {MatsushimaRoutes}
              {TomaokaRoutes}
              {OishiRoutes}
              {OkamotoRoutes}
              {YamakadoRoutes}
              {SklarRoutes}
              {EnriqueRoutes}
              {User1Routes}
              {User2Routes}
              {User3Routes}
              {EditUserRoutes} 
              <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Login onLogin={(loggedUser) => setUser(loggedUser)} />
      )}
    </FirebaseContext.Provider>
  );
}

export default App;
