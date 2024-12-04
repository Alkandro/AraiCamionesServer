import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // Estado separado para cada dropdown
  const [isHoshinoOpen, setIsHoshinoOpen] = useState(false);
  const [isMatsushimaOpen, setIsMatsushimaOpen] = useState(false);
  const [isTomaokaOpen, setIsTomaokaOpen] = useState(false);
  const [isOishiOpen, setIsOishiOpen] = useState(false);
  const [isOkamotoOpen, setIsOkamotoOpen] = useState(false);
  const [isYamakadoOpen, setIsYamakadoOpen] = useState(false);
  const [isSklarOpen, setIsSklarOpen] = useState(false);
  const [isEnriqueOpen, setIsEnriqueOpen] = useState(false);
  const [isUser1Open, setIsUser1Open] = useState(false);
  const [isUser2Open, setIsUser2Open] = useState(false);
  const [isUser3Open, setIsUser3Open] = useState(false);

  // Funciones para alternar la visibilidad de cada dropdown
  const toggleHoshinoDropdown = () => setIsHoshinoOpen(!isHoshinoOpen);
  const toggleMatsushimaDropdown = () => setIsMatsushimaOpen(!isMatsushimaOpen);
  const toggleTomaokaDropdown = () => setIsTomaokaOpen(!isTomaokaOpen);
  const toggleOishiDropdown = () => setIsOishiOpen(!isOishiOpen);
  const toggleOkamotoDropdown = () => setIsOkamotoOpen(!isOkamotoOpen);
  const toggleYamakadoDropdown = () => setIsYamakadoOpen(!isYamakadoOpen);
  const toggleSklarDropdown = () => setIsSklarOpen(!isSklarOpen);
  const toggleEnriqueDropdown = () => setIsEnriqueOpen(!isEnriqueOpen);
  const toggleUser1Dropdown = () => setIsUser1Open(!isUser1Open);
  const toggleUser2Dropdown = () => setIsUser2Open(!isUser2Open);
  const toggleUser3Dropdown = () => setIsUser3Open(!isUser3Open);

  // Función para determinar las clases de `NavLink` basadas en si está activo
  const getLinkClassName = ({ isActive }) =>
    `p-4 ${
      isActive ? "text-blue-500 bg-green-500" : "text-gray-400"
    } block hover:bg-yellow-500 hover:text-gray-900`;

  return (
    <div className="w-1/5 bg-gray-800 h-screen overflow-y-auto">
      <div className="p-6">
        <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">
          株式会社 新井商運
        </p>

        <p className="mt-3 text-gray-600 text-center">Administrador</p>

        <nav className="mt-4">
          {/* Hoshino Dropdown */}
          <div>
            <button
              onClick={toggleHoshinoDropdown}
              className={`p-3 block hover:bg-yellow-500 hover:text-gray-900 ${
                isHoshinoOpen ? "text-yellow-500 bg-gray-700" : "text-gray-400"
              }`}
            >
              <span style={{ marginRight: "12px" }} className="ml-2">
                {isHoshinoOpen ? "▼" : "▶"}
              </span>
              Hoshino
            </button>
            {isHoshinoOpen && (
              <div className="pl-4">
                <NavLink className={getLinkClassName} end to="/hoshino">
                  月
                </NavLink>
                <NavLink className={getLinkClassName} end to="/hoshinoMartes">
                  火
                </NavLink>
                <NavLink
                  className={getLinkClassName}
                  end
                  to="/hoshinoMiercoles"
                >
                  火
                </NavLink>
                <NavLink className={getLinkClassName} end to="/hoshinoJueves">
                  木
                </NavLink>
                <NavLink className={getLinkClassName} end to="/hoshinoViernes">
                  金
                </NavLink>
                <NavLink className={getLinkClassName} end to="/hoshinoSabado">
                  土
                </NavLink>
                <NavLink className={getLinkClassName} end to="/hoshinoDomingo">
                  日
                </NavLink>
                <NavLink className={getLinkClassName} end to="/hoshinoMensaje">
                  Mensaje
                </NavLink>
              </div>
            )}
          </div>
          <hr className="my-4 border-t border-gray-600" />
          {/* Matsushima Dropdown */}
          <div>
            <button
              onClick={toggleMatsushimaDropdown}
              className={`p-3 block hover:bg-yellow-500 hover:text-gray-900 ${
                isMatsushimaOpen
                  ? "text-yellow-500 bg-gray-700"
                  : "text-gray-400"
              }`}
            >
              <span style={{ marginRight: "12px" }} className="ml-2">
                {isMatsushimaOpen ? "▼" : "▶"}
              </span>
              Matsushima
            </button>
            {isMatsushimaOpen && (
              <div className="pl-4">
                <NavLink className={getLinkClassName} end to="/matsushima">
                  Lunes
                </NavLink>
                <NavLink
                  className={getLinkClassName}
                  end
                  to="/matsushimaMartes"
                >
                  Martes
                </NavLink>
                <NavLink
                  className={getLinkClassName}
                  end
                  to="/matsushimaMiercoles"
                >
                  Miércoles
                </NavLink>
                <NavLink
                  className={getLinkClassName}
                  end
                  to="/matsushimaJueves"
                >
                  Jueves
                </NavLink>
                <NavLink
                  className={getLinkClassName}
                  end
                  to="/matsushimaViernes"
                >
                  Viernes
                </NavLink>
                <NavLink
                  className={getLinkClassName}
                  end
                  to="/matsushimaSabado"
                >
                  Sábado
                </NavLink>
                <NavLink
                  className={getLinkClassName}
                  end
                  to="/matsushimaDomingo"
                >
                  Domingo
                </NavLink>
                <NavLink
                  className={getLinkClassName}
                  end
                  to="/matsushimaMensaje"
                >
                  Mensaje
                </NavLink>
              </div>
            )}
          </div>
          <hr className="my-4 border-t border-gray-600" />
          {/* Tomaoka Dropdown */}
          <div>
            <button
              onClick={toggleTomaokaDropdown}
              className={`p-3 block hover:bg-yellow-500 hover:text-gray-900 ${
                isTomaokaOpen ? "text-yellow-500 bg-gray-700" : "text-gray-400"
              }`}
            >
              <span style={{ marginRight: "12px" }} className="ml-2">
                {isTomaokaOpen ? "▼" : "▶"}
              </span>
              Tomaoka
            </button>
            {isTomaokaOpen && (
              <div className="pl-4">
                <NavLink className={getLinkClassName} end to="/tomaoka">
                  Lunes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/tomaokaMartes">
                  Martes
                </NavLink>
                <NavLink
                  className={getLinkClassName}
                  end
                  to="/tomaokaMiercoles"
                >
                  Miércoles
                </NavLink>
                <NavLink className={getLinkClassName} end to="/tomaokaJueves">
                  Jueves
                </NavLink>
                <NavLink className={getLinkClassName} end to="/tomaokaViernes">
                  Viernes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/tomaokaSabado">
                  Sábado
                </NavLink>
                <NavLink className={getLinkClassName} end to="/tomaokaDomingo">
                  Domingo
                </NavLink>
                <NavLink className={getLinkClassName} end to="/tomaokaMensaje">
                  Mensaje
                </NavLink>
              </div>
            )}
          </div>
          <hr className="my-4 border-t border-gray-600" />
          {/* Oishi Dropdown */}
          <div>
            <button
              onClick={toggleOishiDropdown}
              className={`p-3 block hover:bg-yellow-500 hover:text-gray-900 ${
                isOishiOpen ? "text-yellow-500 bg-gray-700" : "text-gray-400"
              }`}
            >
              <span style={{ marginRight: "12px" }} className="ml-2">
                {isOishiOpen ? "▼" : "▶"}
              </span>
              Oishi
            </button>
            {isOishiOpen && (
              <div className="pl-4">
                <NavLink className={getLinkClassName} end to="/oishi">
                  Lunes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/oishiMartes">
                  Martes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/oishiMiercoles">
                  Miércoles
                </NavLink>
                <NavLink className={getLinkClassName} end to="/oishiJueves">
                  Jueves
                </NavLink>
                <NavLink className={getLinkClassName} end to="/oishiViernes">
                  Viernes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/oishiSabado">
                  Sábado
                </NavLink>
                <NavLink className={getLinkClassName} end to="/oishiDomingo">
                  Domingo
                </NavLink>
                <NavLink className={getLinkClassName} end to="/oishiMensaje">
                  Mensaje
                </NavLink>
              </div>
            )}
          </div>
          <hr className="my-4 border-t border-gray-600" />
          {/* Okamoto Dropdown */}
          <div>
            <button
              onClick={toggleOkamotoDropdown}
              className={`p-3 block hover:bg-yellow-500 hover:text-gray-900 ${
                isOkamotoOpen ? "text-yellow-500 bg-gray-700" : "text-gray-400"
              }`}
            >
              <span style={{ marginRight: "12px" }} className="ml-2">
                {isOkamotoOpen ? "▼" : "▶"}
              </span>
              Okamoto
            </button>
            {isOkamotoOpen && (
              <div className="pl-4">
                <NavLink className={getLinkClassName} end to="/okamoto">
                  Lunes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/okamotoMartes">
                  Martes
                </NavLink>
                <NavLink
                  className={getLinkClassName}
                  end
                  to="/okamotoMiercoles"
                >
                  Miércoles
                </NavLink>
                <NavLink className={getLinkClassName} end to="/okamotoJueves">
                  Jueves
                </NavLink>
                <NavLink className={getLinkClassName} end to="/okamotoViernes">
                  Viernes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/okamotoSabado">
                  Sábado
                </NavLink>
                <NavLink className={getLinkClassName} end to="/okamotoDomingo">
                  Domingo
                </NavLink>
                <NavLink className={getLinkClassName} end to="/okamotoMensaje">
                  Mensaje
                </NavLink>
              </div>
            )}
          </div>
          <hr className="my-4 border-t border-gray-600" />
          {/* Yamakado Dropdown */}
          <div>
            <button
              onClick={toggleYamakadoDropdown}
              className={`p-3 block hover:bg-yellow-500 hover:text-gray-900 ${
                isYamakadoOpen ? "text-yellow-500 bg-gray-700" : "text-gray-400"
              }`}
            >
              <span style={{ marginRight: "12px" }} className="ml-2">
                {isYamakadoOpen ? "▼" : "▶"}
              </span>
              Yamakado
            </button>
            {isYamakadoOpen && (
              <div className="pl-4">
                <NavLink className={getLinkClassName} end to="/yamakado">
                  Lunes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/yamakadoMartes">
                  Martes
                </NavLink>
                <NavLink
                  className={getLinkClassName}
                  end
                  to="/yamakadoMiercoles"
                >
                  Miércoles
                </NavLink>
                <NavLink className={getLinkClassName} end to="/yamakadoJueves">
                  Jueves
                </NavLink>
                <NavLink className={getLinkClassName} end to="/yamakadoViernes">
                  Viernes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/yamakadoSabado">
                  Sábado
                </NavLink>
                <NavLink className={getLinkClassName} end to="/yamakadoDomingo">
                  Domingo
                </NavLink>
                <NavLink className={getLinkClassName} end to="/yamakadoMensaje">
                  Mensaje
                </NavLink>
              </div>
            )}
          </div>
          <hr className="my-4 border-t border-gray-600" />
          {/* Sklar Dropdown */}
          <div>
            <button
              onClick={toggleSklarDropdown}
              className={`p-3 block hover:bg-yellow-500 hover:text-gray-900 ${
                isSklarOpen ? "text-yellow-500 bg-gray-700" : "text-gray-400"
              }`}
            >
              <span style={{ marginRight: "12px" }} className="ml-2">
                {isSklarOpen ? "▼" : "▶"}
              </span>
              Sklar
            </button>
            {isSklarOpen && (
              <div className="pl-4">
                <NavLink className={getLinkClassName} end to="/sklar">
                  Lunes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/sklarMartes">
                  Martes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/sklarMiercoles">
                  Miércoles
                </NavLink>
                <NavLink className={getLinkClassName} end to="/sklarJueves">
                  Jueves
                </NavLink>
                <NavLink className={getLinkClassName} end to="/sklarViernes">
                  Viernes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/sklarSabado">
                  Sábado
                </NavLink>
                <NavLink className={getLinkClassName} end to="/sklarDomingo">
                  Domingo
                </NavLink>
                <NavLink className={getLinkClassName} end to="/sklarMensaje">
                  Mensaje
                </NavLink>
              </div>
            )}
          </div>
          <hr className="my-4 border-t border-gray-600" />
          {/* Enrique Dropdown */}
          <div>
            <button
              onClick={toggleEnriqueDropdown}
              className={`p-3 block hover:bg-yellow-500 hover:text-gray-900 ${
                isEnriqueOpen ? "text-yellow-500 bg-gray-700" : "text-gray-400"
              }`}
            >
              <span style={{ marginRight: "12px" }} className="ml-2">
                {isEnriqueOpen ? "▼" : "▶"}
              </span>
              Enrique
            </button>
            {isEnriqueOpen && (
              <div className="pl-4">
                <NavLink className={getLinkClassName} end to="/enrique">
                  Lunes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/enriqueMartes">
                  Martes
                </NavLink>
                <NavLink
                  className={getLinkClassName}
                  end
                  to="/enriqueMiercoles"
                >
                  Miércoles
                </NavLink>
                <NavLink className={getLinkClassName} end to="/enriqueJueves">
                  Jueves
                </NavLink>
                <NavLink className={getLinkClassName} end to="/enriqueViernes">
                  Viernes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/enriqueSabado">
                  Sábado
                </NavLink>
                <NavLink className={getLinkClassName} end to="/enriqueDomingo">
                  Domingo
                </NavLink>
                <NavLink className={getLinkClassName} end to="/enriqueMensaje">
                  Mensaje
                </NavLink>
              </div>
            )}
          </div>
          {/* Línea divisoria */}
          <hr
            className="my-4 border-gray-600"
            style={{ borderTopWidth: "6px" }}
          />

          {/* User1 Dropdown */}
          <div>
            <button
              onClick={toggleUser1Dropdown}
              className={`p-3 block hover:bg-yellow-500 hover:text-gray-900 ${
                isUser1Open ? "text-yellow-500 bg-gray-700" : "text-gray-400"
              }`}
            >
              <span
                style={{ display: "inline-block", marginRight: "12px" }}
                className="ml-2"
              >
                {isUser1Open ? "▼" : "▶"}
              </span>
              <p style={{ display: "inline-block", color: "white" }}> User1</p>
            </button>
            {isUser1Open && (
              <div className="pl-4">
                <NavLink className={getLinkClassName} end to="/user1">
                  Lunes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user1Martes">
                  Martes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user1Miercoles">
                  Miércoles
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user1Jueves">
                  Jueves
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user1Viernes">
                  Viernes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user1Sabado">
                  Sábado
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user1Domingo">
                  Domingo
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user1Mensaje">
                  Mensaje
                </NavLink>
              </div>
            )}
          </div>
          {/* User2 Dropdown */}
          <div>
            <button
              onClick={toggleUser2Dropdown}
              className={`p-3 block hover:bg-yellow-500 hover:text-gray-900 ${
                isUser2Open ? "text-yellow-500 bg-gray-700" : "text-gray-400"
              }`}
            >
              <span
                style={{ display: "inline-block", marginRight: "12px" }}
                className="ml-2"
              >
                {isUser2Open ? "▼" : "▶"}
              </span>
              <p style={{ display: "inline-block", color: "white" }}> User2</p>
            </button>
            {isUser2Open && (
              <div className="pl-4">
                <NavLink className={getLinkClassName} end to="/user2">
                  Lunes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user2Martes">
                  Martes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user2Miercoles">
                  Miércoles
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user2Jueves">
                  Jueves
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user2Viernes">
                  Viernes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user2Sabado">
                  Sábado
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user2Domingo">
                  Domingo
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user2Mensaje">
                  Mensaje
                </NavLink>
              </div>
            )}
          </div>
          {/* User3 Dropdown */}
          <div>
            <button
              onClick={toggleUser3Dropdown}
              className={`p-3 block hover:bg-yellow-500 hover:text-gray-900 ${
                isUser3Open ? "text-yellow-500 bg-gray-700" : "text-gray-400"
              }`}
            >
              <span
                style={{ display: "inline-block", marginRight: "12px" }}
                className="ml-2"
              >
                {isUser3Open ? "▼" : "▶"}
              </span>
              <p style={{ display: "inline-block", color: "white" }}> User3</p>
            </button>
            {isUser3Open && (
              <div className="pl-4">
                <NavLink className={getLinkClassName} end to="/user3">
                  Lunes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user3Martes">
                  Martes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user3Miercoles">
                  Miércoles
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user3Jueves">
                  Jueves
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user3Viernes">
                  Viernes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user3Sabado">
                  Sábado
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user3Domingo">
                  Domingo
                </NavLink>
                <NavLink className={getLinkClassName} end to="/user3Mensaje">
                  Mensaje
                </NavLink>
              </div>
            )}
          </div>

          {/* <NavLink className={getLinkClassName} end to="/">
            Órdenes
          </NavLink> */}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
