import React from "react";
import { Routes, Route } from "react-router";

import firebase, { FirebaseContext } from "./firebase";

// import Ordenes from "./components/paginas/Ordenes";
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
} from "../src/components/ui/routes";

function App() {
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
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

            <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
