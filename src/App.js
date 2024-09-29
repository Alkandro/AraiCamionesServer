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
import HoshinoMensaje from "./components/paginas/Hoshino/Mensaje/HoshinoMensaje";
import Hoshino1Mensaje from "./components/paginas/Hoshino/Mensaje/Hoshino1Mensaje";

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

//OKAMOTO
import Okamoto from "./components/paginas/Okamoto/Lunes/Okamoto";
import Okamoto1 from "./components/paginas/Okamoto/Lunes/Okamoto1";
import OkamotoMartes from "./components/paginas/Okamoto/Martes/OkamotoMartes";
import Okamoto1Martes from "./components/paginas/Okamoto/Martes/Okamoto1Martes";
import OkamotoMiercoles from "./components/paginas/Okamoto/Miercoles/OkamotoMiercoles";
import Okamoto1Miercoles from "./components/paginas/Okamoto/Miercoles/Okamoto1Miercoles";
import OkamotoJueves from "./components/paginas/Okamoto/Jueves/OkamotoJueves";
import Okamoto1Jueves from "./components/paginas/Okamoto/Jueves/Okamoto1Jueves";
import OkamotoViernes from "./components/paginas/Okamoto/Viernes/OkamotoViernes";
import Okamoto1Viernes from "./components/paginas/Okamoto/Viernes/Okamoto1Viernes";
import OkamotoSabado from "./components/paginas/Okamoto/Sabado/OkamotoSabado";
import Okamoto1Sabado from "./components/paginas/Okamoto/Sabado/Okamoto1Sabado";
import OkamotoDomingo from "./components/paginas/Okamoto/Domingo/OkamotoDomingo";
import Okamoto1Domingo from "./components/paginas/Okamoto/Domingo/Okamoto1Domingo";

//YAMAKADO
import Yamakado from "./components/paginas/Yamakado/Lunes/Yamakado";
import Yamakado1 from "./components/paginas/Yamakado/Lunes/Yamakado1";
import YamakadoMartes from "./components/paginas/Yamakado/Martes/YamakadoMartes";
import Yamakado1Martes from "./components/paginas/Yamakado/Martes/Yamakado1Martes";
import YamakadoMiercoles from "./components/paginas/Yamakado/Miercoles/YamakadoMiercoles";
import Yamakado1Miercoles from "./components/paginas/Yamakado/Miercoles/Yamakado1Miercoles";
import YamakadoJueves from "./components/paginas/Yamakado/Jueves/YamakadoJueves";
import Yamakado1Jueves from "./components/paginas/Yamakado/Jueves/Yamakado1Jueves";
import YamakadoViernes from "./components/paginas/Yamakado/Viernes/YamakadoViernes";
import Yamakado1Viernes from "./components/paginas/Yamakado/Viernes/Yamakado1Viernes";
import YamakadoSabado from "./components/paginas/Yamakado/Sabado/YamakadoSabado";
import Yamakado1Sabado from "./components/paginas/Yamakado/Sabado/Yamakado1Sabado";
import YamakadoDomingo from "./components/paginas/Yamakado/Domingo/YamakadoDomingo";
import Yamakado1Domingo from "./components/paginas/Yamakado/Domingo/Yamakado1Domingo";

//SKLAR
import Sklar from "./components/paginas/Sklar/Lunes/Sklar";
import Sklar1 from "./components/paginas/Sklar/Lunes/Sklar1";
import SklarMartes from "./components/paginas/Sklar/Martes/SklarMartes";
import Sklar1Martes from "./components/paginas/Sklar/Martes/Sklar1Martes";
import SklarMiercoles from "./components/paginas/Sklar/Miercoles/SklarMiercoles";
import Sklar1Miercoles from "./components/paginas/Sklar/Miercoles/Sklar1Miercoles";
import SklarJueves from "./components/paginas/Sklar/Jueves/SklarJueves";
import Sklar1Jueves from "./components/paginas/Sklar/Jueves/Sklar1Jueves";
import SklarViernes from "./components/paginas/Sklar/Viernes/SklarViernes";
import Sklar1Viernes from "./components/paginas/Sklar/Viernes/Sklar1Viernes";
import SklarSabado from "./components/paginas/Sklar/Sabado/SklarSabado";
import Sklar1Sabado from "./components/paginas/Sklar/Sabado/Sklar1Sabado";
import SklarDomingo from "./components/paginas/Sklar/Domingo/SklarDomingo";
import Sklar1Domingo from "./components/paginas/Sklar/Domingo/Sklar1Domingo";

//ENRIQUE
import Enrique from "./components/paginas/Enrique/Lunes/Enrique";
import Enrique1 from "./components/paginas/Enrique/Lunes/Enrique1";
import EnriqueMartes from "./components/paginas/Enrique/Martes/EnriqueMartes";
import Enrique1Martes from "./components/paginas/Enrique/Martes/Enrique1Martes";
import EnriqueMiercoles from "./components/paginas/Enrique/Miercoles/EnriqueMiercoles";
import Enrique1Miercoles from "./components/paginas/Enrique/Miercoles/Enrique1Miercoles";
import EnriqueJueves from "./components/paginas/Enrique/Jueves/EnriqueJueves";
import Enrique1Jueves from "./components/paginas/Enrique/Jueves/Enrique1Jueves";
import EnriqueViernes from "./components/paginas/Enrique/Viernes/EnriqueViernes";
import Enrique1Viernes from "./components/paginas/Enrique/Viernes/Enrique1Viernes";
import EnriqueSabado from "./components/paginas/Enrique/Sabado/EnriqueSabado";
import Enrique1Sabado from "./components/paginas/Enrique/Sabado/Enrique1Sabado";
import EnriqueDomingo from "./components/paginas/Enrique/Domingo/EnriqueDomingo";
import Enrique1Domingo from "./components/paginas/Enrique/Domingo/Enrique1Domingo";

//USER1
import User1 from "./components/paginas/User1/Lunes/User1";
import User11 from "./components/paginas/User1/Lunes/User11";
import User1Martes from "./components/paginas/User1/Martes/User1Martes";
import User11Martes from "./components/paginas/User1/Martes/User11Martes";
import User1Miercoles from "./components/paginas/User1/Miercoles/User1Miercoles";
import User11Miercoles from "./components/paginas/User1/Miercoles/User11Miercoles";
import User1Jueves from "./components/paginas/User1/Jueves/User1Jueves";
import User11Jueves from "./components/paginas/User1/Jueves/User11Jueves";
import User1Viernes from "./components/paginas/User1/Viernes/User1Viernes";
import User11Viernes from "./components/paginas/User1/Viernes/User11Viernes";
import User1Sabado from "./components/paginas/User1/Sabado/User1Sabado";
import User11Sabado from "./components/paginas/User1/Sabado/User11Sabado";
import User1Domingo from "./components/paginas/User1/Domingo/User1Domingo";
import User11Domingo from "./components/paginas/User1/Domingo/User11Domingo";

//USER2
import User2 from "./components/paginas/User2/Lunes/User2";
import User21 from "./components/paginas/User2/Lunes/User21";
import User2Martes from "./components/paginas/User2/Martes/User2Martes";
import User21Martes from "./components/paginas/User2/Martes/User21Martes";
import User2Miercoles from "./components/paginas/User2/Miercoles/User2Miercoles";
import User21Miercoles from "./components/paginas/User2/Miercoles/User21Miercoles";
import User2Jueves from "./components/paginas/User2/Jueves/User2Jueves";
import User21Jueves from "./components/paginas/User2/Jueves/User21Jueves";
import User2Viernes from "./components/paginas/User2/Viernes/User2Viernes";
import User21Viernes from "./components/paginas/User2/Viernes/User21Viernes";
import User2Sabado from "./components/paginas/User2/Sabado/User2Sabado";
import User21Sabado from "./components/paginas/User2/Sabado/User21Sabado";
import User2Domingo from "./components/paginas/User2/Domingo/User2Domingo";
import User21Domingo from "./components/paginas/User2/Domingo/User21Domingo";

//USER3
import User3 from "./components/paginas/User3/Lunes/User3";
import User31 from "./components/paginas/User3/Lunes/User31";
import User3Martes from "./components/paginas/User3/Martes/User3Martes";
import User31Martes from "./components/paginas/User3/Martes/User31Martes";
import User3Miercoles from "./components/paginas/User3/Miercoles/User3Miercoles";
import User31Miercoles from "./components/paginas/User3/Miercoles/User31Miercoles";
import User3Jueves from "./components/paginas/User3/Jueves/User3Jueves";
import User31Jueves from "./components/paginas/User3/Jueves/User31Jueves";
import User3Viernes from "./components/paginas/User3/Viernes/User3Viernes";
import User31Viernes from "./components/paginas/User3/Viernes/User31Viernes";
import User3Sabado from "./components/paginas/User3/Sabado/User3Sabado";
import User31Sabado from "./components/paginas/User3/Sabado/User31Sabado";
import User3Domingo from "./components/paginas/User3/Domingo/User3Domingo";
import User31Domingo from "./components/paginas/User3/Domingo/User31Domingo";



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
            <Route path="/hoshinoMensaje" element={<HoshinoMensaje />} />
            <Route path="/hoshino1Mensaje" element={<Hoshino1Mensaje />} />

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

             {/* //Okamoto */}
             <Route path="/okamoto" element={<Okamoto />} />
            <Route path="/okamoto1" element={<Okamoto1 />} />
            <Route path="/okamotoMartes" element={<OkamotoMartes />} />
            <Route path="/okamoto1Martes" element={<Okamoto1Martes />} />
            <Route path="/okamotoMiercoles" element={<OkamotoMiercoles />} />
            <Route path="/okamoto1Miercoles" element={<Okamoto1Miercoles />} />
            <Route path="/okamotoJueves" element={<OkamotoJueves />} />
            <Route path="/okamoto1Jueves" element={<Okamoto1Jueves />} />
            <Route path="/okamotoViernes" element={<OkamotoViernes />} />
            <Route path="/okamoto1Viernes" element={<Okamoto1Viernes />} />
            <Route path="/okamotoSabado" element={<OkamotoSabado/>} />
            <Route path="/okamoto1Sabado" element={<Okamoto1Sabado />} />
            <Route path="/okamotoDomingo" element={<OkamotoDomingo />} />
            <Route path="/okamoto1Domingo" element={<Okamoto1Domingo />} />

             {/* //Yamakado */}
             <Route path="/yamakado" element={<Yamakado />} />
            <Route path="/yamakado1" element={<Yamakado1 />} />
            <Route path="/yamakadoMartes" element={<YamakadoMartes />} />
            <Route path="/yamakado1Martes" element={<Yamakado1Martes />} />
            <Route path="/yamakadoMiercoles" element={<YamakadoMiercoles />} />
            <Route path="/yamakado1Miercoles" element={<Yamakado1Miercoles />} />
            <Route path="/yamakadoJueves" element={<YamakadoJueves />} />
            <Route path="/yamakado1Jueves" element={<Yamakado1Jueves />} />
            <Route path="/yamakadoViernes" element={<YamakadoViernes />} />
            <Route path="/yamakado1Viernes" element={<Yamakado1Viernes />} />
            <Route path="/yamakadoSabado" element={<YamakadoSabado/>} />
            <Route path="/yamakado1Sabado" element={<Yamakado1Sabado />} />
            <Route path="/yamakadoDomingo" element={<YamakadoDomingo />} />
            <Route path="/yamakado1Domingo" element={<Yamakado1Domingo />} />

             {/* //Sklar */}
             <Route path="/sklar" element={<Sklar  />} />
            <Route path="/sklar1" element={<Sklar1 />} />
            <Route path="/sklarMartes" element={<SklarMartes />} />
            <Route path="/sklar1Martes" element={<Sklar1Martes />} />
            <Route path="/sklarMiercoles" element={<SklarMiercoles />} />
            <Route path="/sklar1Miercoles" element={<Sklar1Miercoles />} />
            <Route path="/sklarJueves" element={<SklarJueves />} />
            <Route path="/sklar1Jueves" element={<Sklar1Jueves />} />
            <Route path="/sklarViernes" element={<SklarViernes />} />
            <Route path="/sklar1Viernes" element={<Sklar1Viernes />} />
            <Route path="/sklarSabado" element={<SklarSabado/>} />
            <Route path="/sklar1Sabado" element={<Sklar1Sabado />} />
            <Route path="/sklarDomingo" element={<SklarDomingo />} />
            <Route path="/sklar1Domingo" element={<Sklar1Domingo />} />

            {/* //Enrique */}
            <Route path="/enrique" element={<Enrique  />} />
            <Route path="/enrique1" element={<Enrique1 />} />
            <Route path="/enriqueMartes" element={<EnriqueMartes />} />
            <Route path="/enrique1Martes" element={<Enrique1Martes />} />
            <Route path="/enriqueMiercoles" element={<EnriqueMiercoles />} />
            <Route path="/enrique1Miercoles" element={<Enrique1Miercoles />} />
            <Route path="/enriqueJueves" element={<EnriqueJueves />} />
            <Route path="/enrique1Jueves" element={<Enrique1Jueves />} />
            <Route path="/enriqueViernes" element={<EnriqueViernes />} />
            <Route path="/enrique1Viernes" element={<Enrique1Viernes />} />
            <Route path="/enriqueSabado" element={<EnriqueSabado/>} />
            <Route path="/enrique1Sabado" element={<Enrique1Sabado />} />
            <Route path="/enriqueDomingo" element={<EnriqueDomingo />} />
            <Route path="/enrique1Domingo" element={<Enrique1Domingo />} />

            {/* //User1 */}
            <Route path="/user1" element={<User1  />} />
            <Route path="/user11" element={<User11 />} />
            <Route path="/user1Martes" element={<User1Martes />} />
            <Route path="/user11Martes" element={<User11Martes />} />
            <Route path="/user1Miercoles" element={<User1Miercoles />} />
            <Route path="/user11Miercoles" element={<User11Miercoles />} />
            <Route path="/user1Jueves" element={<User1Jueves />} />
            <Route path="/user11Jueves" element={<User11Jueves />} />
            <Route path="/user1Viernes" element={<User1Viernes />} />
            <Route path="/user11Viernes" element={<User11Viernes />} />
            <Route path="/user1Sabado" element={<User1Sabado/>} />
            <Route path="/user11Sabado" element={<User11Sabado />} />
            <Route path="/user1Domingo" element={<User1Domingo />} />
            <Route path="/user11Domingo" element={<User11Domingo />} />

            {/* //User2 */}
            <Route path="/user2" element={<User2  />} />
            <Route path="/user21" element={<User21 />} />
            <Route path="/user2Martes" element={<User2Martes />} />
            <Route path="/user21Martes" element={<User21Martes />} />
            <Route path="/user2Miercoles" element={<User2Miercoles />} />
            <Route path="/user21Miercoles" element={<User21Miercoles />} />
            <Route path="/user2Jueves" element={<User2Jueves />} />
            <Route path="/user21Jueves" element={<User21Jueves />} />
            <Route path="/user2Viernes" element={<User2Viernes />} />
            <Route path="/user21Viernes" element={<User21Viernes />} />
            <Route path="/user2Sabado" element={<User2Sabado/>} />
            <Route path="/user21Sabado" element={<User21Sabado />} />
            <Route path="/user2Domingo" element={<User2Domingo />} />
            <Route path="/user21Domingo" element={<User21Domingo />} />

            {/* //User3 */}
            <Route path="/user3" element={<User3  />} />
            <Route path="/user31" element={<User31 />} />
            <Route path="/user3Martes" element={<User3Martes />} />
            <Route path="/user31Martes" element={<User31Martes />} />
            <Route path="/user3Miercoles" element={<User3Miercoles />} />
            <Route path="/user31Miercoles" element={<User31Miercoles />} />
            <Route path="/user3Jueves" element={<User3Jueves />} />
            <Route path="/user31Jueves" element={<User31Jueves />} />
            <Route path="/user3Viernes" element={<User3Viernes />} />
            <Route path="/user31Viernes" element={<User31Viernes />} />
            <Route path="/user3Sabado" element={<User3Sabado/>} />
            <Route path="/user31Sabado" element={<User31Sabado />} />
            <Route path="/user3Domingo" element={<User3Domingo />} />
            <Route path="/user31Domingo" element={<User31Domingo />} />





            <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
           
            
            
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;


