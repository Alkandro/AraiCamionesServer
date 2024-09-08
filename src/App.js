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

//HOSHINO
import Hoshino from "./components/paginas/Hoshino/Lunes/Hoshino";
import Hoshino1 from "./components/paginas/Hoshino/Lunes/Hoshino1";
import HoshinoMartes from "./components/paginas/Hoshino/Martes/HoshinoMartes";
import Hoshino1Martes from "./components/paginas/Hoshino/Martes/Hoshino1Martes";
import HoshinoMiercoles from "./components/paginas/Hoshino/Miercoles/HoshinoMiercoles";
import Hoshino1Miercoles from "./components/paginas/Hoshino/Miercoles/Hoshino1Miercoles";
import HoshinoJueves from "./components/paginas/Hoshino/Jueves/HoshinoJueves";
import Hoshino1Jueves from "./components/paginas/Hoshino/Jueves/Hoshino1Jueves";
import HoshinoViernes from "./components/paginas/Hoshino/Viernes/HoshinoViernes";
import Hoshino1Viernes from "./components/paginas/Hoshino/Viernes/Hoshino1Viernes";
import HoshinoSabado from "./components/paginas/Hoshino/Sabado/HoshinoSabado";
import Hoshino1Sabado from "./components/paginas/Hoshino/Sabado/Hoshino1Sabado";
import HoshinoDomingo from "./components/paginas/Hoshino/Domingo/HoshinoDomingo";
import Hoshino1Domingo from "./components/paginas/Hoshino/Domingo/Hoshino1Domingo";


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
            
            
            {/* //Hoshino */}
            <Route path="/hoshino" element={<Hoshino />} />
            <Route path="/hoshino1" element={<Hoshino1 />} />
            <Route path="/hoshinoMartes" element={<HoshinoMartes />} />
            <Route path="/hoshino1Martes" element={<Hoshino1Martes />} />
            <Route path="/hoshinoMiercoles" element={<HoshinoMiercoles />} />
            <Route path="/hoshino1Miercoles" element={<Hoshino1Miercoles />} />
            <Route path="/hoshinoJueves" element={<HoshinoJueves />} />
            <Route path="/hoshino1Jueves" element={<Hoshino1Jueves />} />
            <Route path="/hoshinoViernes" element={<HoshinoViernes />} />
            <Route path="/hoshino1Viernes" element={<Hoshino1Viernes />} />
            <Route path="/hoshinoSabado" element={<HoshinoSabado/>} />
            <Route path="/hoshino1Sabado" element={<Hoshino1Sabado />} />
            <Route path="/hoshinoDomingo" element={<HoshinoDomingo />} />
            <Route path="/hoshino1Domingo" element={<Hoshino1Domingo />} />



            <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
            <Route path="/matsushima1" element={<Matsushima1 />} />
            <Route path="/tomaoka1" element={<Tomaoka1 />} />
            
            
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;


