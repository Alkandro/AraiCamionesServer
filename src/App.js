import React from "react";
import { Routes, Route } from "react-router";

import firebase, { FirebaseContext } from "./firebase";

// import Ordenes from "./components/paginas/Ordenes";
import NuevoPlatillo from "./components/paginas/NuevoPlatillo";
import Sidebar from "./components/ui/Sidebar";


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

//MATSUSHIMA
import Matsushima from "./components/paginas/Matsushima/Lunes/Matsushima";
import Matsushima1 from "./components/paginas/Matsushima/Lunes/Matsushima1";
import MatsushimaMartes from "./components/paginas/Matsushima/Martes/MatsushimaMartes";
import Matsushima1Martes from "./components/paginas/Matsushima/Martes/Matsushima1Martes";
import MatsushimaMiercoles from "./components/paginas/Matsushima/Miercoles/MatsushimaMiercoles";
import Matsushima1Miercoles from "./components/paginas/Matsushima/Miercoles/Matsushima1Miercoles";
import MatsushimaJueves from "./components/paginas/Matsushima/Jueves/MatsushimaJueves";
import Matsushima1Jueves from "./components/paginas/Matsushima/Jueves/Matsushima1Jueves";
import MatsushimaViernes from "./components/paginas/Matsushima/Viernes/MatsushimaViernes";
import Matsushima1Viernes from "./components/paginas/Matsushima/Viernes/Matsushima1Viernes";
import MatsushimaSabado from "./components/paginas/Matsushima/Sabado/MatsushimaSabado";
import Matsushima1Sabado from "./components/paginas/Matsushima/Sabado/Matsushima1Sabado";
import MatsushimaDomingo from "./components/paginas/Matsushima/Domingo/MatsushimaDomingo";
import Matsushima1Domingo from "./components/paginas/Matsushima/Domingo/Matsushima1Domingo";

//TOMAOKA
import Tomaoka from "./components/paginas/Tomaoka/Lunes/Tomaoka";
import Tomaoka1 from "./components/paginas/Tomaoka/Lunes/Tomaoka1";
import TomaokaMartes from "./components/paginas/Tomaoka/Martes/TomaokaMartes";
import Tomaoka1Martes from "./components/paginas/Tomaoka/Martes/Tomaoka1Martes";
import TomaokaMiercoles from "./components/paginas/Tomaoka/Miercoles/TomaokaMiercoles";
import Tomaoka1Miercoles from "./components/paginas/Tomaoka/Miercoles/Tomaoka1Miercoles";
import TomaokaJueves from "./components/paginas/Tomaoka/Jueves/TomaokaJueves";
import Tomaoka1Jueves from "./components/paginas/Tomaoka/Jueves/Tomaoka1Jueves";
import TomaokaViernes from "./components/paginas/Tomaoka/Viernes/TomaokaViernes";
import Tomaoka1Viernes from "./components/paginas/Tomaoka/Viernes/Tomaoka1Viernes";
import TomaokaSabado from "./components/paginas/Tomaoka/Sabado/TomaokaSabado";
import Tomaoka1Sabado from "./components/paginas/Tomaoka/Sabado/Tomaoka1Sabado";
import TomaokaDomingo from "./components/paginas/Tomaoka/Domingo/TomaokaDomingo";
import Tomaoka1Domingo from "./components/paginas/Tomaoka/Domingo/Tomaoka1Domingo";

//OISHI
import Oishi from "./components/paginas/Oishi/Lunes/Oishi";
import Oishi1 from "./components/paginas/Oishi/Lunes/Oishi1";
import OishiMartes from "./components/paginas/Oishi/Martes/OishiMartes";
import Oishi1Martes from "./components/paginas/Oishi/Martes/Oishi1Martes";
import OishiMiercoles from "./components/paginas/Oishi/Miercoles/OishiMiercoles";
import Oishi1Miercoles from "./components/paginas/Oishi/Miercoles/Oishi1Miercoles";
import OishiJueves from "./components/paginas/Oishi/Jueves/OishiJueves";
import Oishi1Jueves from "./components/paginas/Oishi/Jueves/Oishi1Jueves";
import OishiViernes from "./components/paginas/Oishi/Viernes/OishiViernes";
import Oishi1Viernes from "./components/paginas/Oishi/Viernes/Oishi1Viernes";
import OishiSabado from "./components/paginas/Oishi/Sabado/OishiSabado";
import Oishi1Sabado from "./components/paginas/Oishi/Sabado/Oishi1Sabado";
import OishiDomingo from "./components/paginas/Oishi/Domingo/OishiDomingo";
import Oishi1Domingo from "./components/paginas/Oishi/Domingo/Oishi1Domingo";



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
            {/* <Route path="/" element={<Ordenes />} /> */}
            
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

            {/* //Matsushima */}
            <Route path="/matsushima" element={<Matsushima />} />
            <Route path="/matsushima1" element={<Matsushima1 />} />
            <Route path="/matsushimaMartes" element={<MatsushimaMartes />} />
            <Route path="/matsushima1Martes" element={<Matsushima1Martes />} />
            <Route path="/matsushimaMiercoles" element={<MatsushimaMiercoles />} />
            <Route path="/matsushima1Miercoles" element={<Matsushima1Miercoles />} />
            <Route path="/matsushimaJueves" element={<MatsushimaJueves />} />
            <Route path="/matsushima1Jueves" element={<Matsushima1Jueves />} />
            <Route path="/matsushimaViernes" element={<MatsushimaViernes />} />
            <Route path="/matsushima1Viernes" element={<Matsushima1Viernes />} />
            <Route path="/matsushimaSabado" element={<MatsushimaSabado/>} />
            <Route path="/matsushima1Sabado" element={<Matsushima1Sabado />} />
            <Route path="/matsushimaDomingo" element={<MatsushimaDomingo />} />
            <Route path="/matsushima1Domingo" element={<Matsushima1Domingo />} />

             {/* //Tomaoka */}
             <Route path="/tomaoka" element={<Tomaoka/>} />
            <Route path="/tomaoka1" element={<Tomaoka1 />} />
            <Route path="/tomaokaMartes" element={<TomaokaMartes />} />
            <Route path="/tomaoka1Martes" element={<Tomaoka1Martes />} />
            <Route path="/tomaokaMiercoles" element={<TomaokaMiercoles />} />
            <Route path="/tomaoka1Miercoles" element={<Tomaoka1Miercoles />} />
            <Route path="/tomaokaJueves" element={<TomaokaJueves />} />
            <Route path="/tomaoka1Jueves" element={<Tomaoka1Jueves />} />
            <Route path="/tomaokaViernes" element={<TomaokaViernes />} />
            <Route path="/tomaoka1Viernes" element={<Tomaoka1Viernes />} />
            <Route path="/tomaokaSabado" element={<TomaokaSabado/>} />
            <Route path="/tomaoka1Sabado" element={<Tomaoka1Sabado />} />
            <Route path="/tomaokaDomingo" element={<TomaokaDomingo />} />
            <Route path="/tomaoka1Domingo" element={<Tomaoka1Domingo />} />

             {/* //Oishi */}
             <Route path="/oishi" element={<Oishi/>} />
            <Route path="/oishi1" element={<Oishi1 />} />
            <Route path="/oishiMartes" element={<OishiMartes />} />
            <Route path="/oishi1Martes" element={<Oishi1Martes />} />
            <Route path="/oishiMiercoles" element={<OishiMiercoles />} />
            <Route path="/oishi1Miercoles" element={<Oishi1Miercoles />} />
            <Route path="/oishiJueves" element={<OishiJueves />} />
            <Route path="/oishi1Jueves" element={<Oishi1Jueves />} />
            <Route path="/oishiViernes" element={<OishiViernes />} />
            <Route path="/oishi1Viernes" element={<Oishi1Viernes />} />
            <Route path="/oishiSabado" element={<OishiSabado/>} />
            <Route path="/oishi1Sabado" element={<Oishi1Sabado />} />
            <Route path="/oishiDomingo" element={<OishiDomingo />} />
            <Route path="/oishi1Domingo" element={<Oishi1Domingo />} />





            <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
           
            
            
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;


