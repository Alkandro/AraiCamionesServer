import React from "react";
import { Routes, Route } from "react-router";

import firebase, { FirebaseContext } from "./firebase";

import Ordenes from "./components/paginas/Ordenes";
import Menu from "./components/paginas/Menu";
import NuevoPlatillo from "./components/paginas/NuevoPlatillo";
import Sidebar from "./components/ui/Sidebar";
import Matsushima from "./components/paginas/Matsushima/Matsushima";
import Matsushima1 from "./components/paginas/Matsushima/Matsushima1";
import Tomaoka from "./components/paginas/Tomaoka/Tomaoka";
import Tomaoka1 from "./components/paginas/Tomaoka/Tomaoka1";
import Hoshino from "./components/paginas/Hoshino/Hoshino";
import Hoshino1 from "./components/paginas/Hoshino/Hoshino1";


function App() {
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
      <div className="md:flex min-h-screen">
        <Sidebar />
        <div className="md:w-3/5 xl:w-4/5 p-6">
          <Routes>
            <Route path="/" element={<Ordenes />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/matsushima" element={<Matsushima />} />
            <Route path="/tomaoka" element={<Tomaoka />} />
            <Route path="/hoshino" element={<Hoshino />} />
            <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
            <Route path="/matsushima1" element={<Matsushima1 />} />
            <Route path="/tomaoka1" element={<Tomaoka1 />} />
            <Route path="/hoshino1" element={<Hoshino1 />} />
            
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
