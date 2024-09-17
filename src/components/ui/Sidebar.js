import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // Estado separado para cada dropdown
  const [isHoshinoOpen, setIsHoshinoOpen] = useState(false);
  const [isMatsushimaOpen, setIsMatsushimaOpen] = useState(false);

  // Funciones para alternar la visibilidad de cada dropdown
  const toggleHoshinoDropdown = () => setIsHoshinoOpen(!isHoshinoOpen);
  const toggleMatsushimaDropdown = () => setIsMatsushimaOpen(!isMatsushimaOpen);

  // Función para determinar las clases de `NavLink` basadas en si está activo
  const getLinkClassName = ({ isActive }) =>
    `p-4 ${isActive ? "text-blue-500 bg-green-500" : "text-gray-400"} block hover:bg-yellow-500 hover:text-gray-900`;

  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">
          株式会社 新井商運
        </p>

        <p className="mt-3 text-gray-600 text-center">Administrador</p>

        <nav className="mt-1">
         

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
                  Lunes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/hoshinoMartes">
                  Martes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/hoshinoMiercoles">
                  Miércoles
                </NavLink>
                <NavLink className={getLinkClassName} end to="/hoshinoJueves">
                  Jueves
                </NavLink>
                <NavLink className={getLinkClassName} end to="/hoshinoViernes">
                  Viernes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/hoshinoSabado">
                  Sábado
                </NavLink>
                <NavLink className={getLinkClassName} end to="/hoshinoDomingo">
                  Domingo
                </NavLink>
              </div>
            )}
          </div>

          {/* Matsushima Dropdown */}
          <div>
            <button
              onClick={toggleMatsushimaDropdown}
              className={`p-3 block hover:bg-yellow-500 hover:text-gray-900 ${
                isMatsushimaOpen ? "text-yellow-500 bg-gray-700" : "text-gray-400"
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
                <NavLink className={getLinkClassName} end to="/matsushimaMartes">
                  Martes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/matsushimaMiercoles">
                  Miércoles
                </NavLink>
                <NavLink className={getLinkClassName} end to="/matsushimaJueves">
                  Jueves
                </NavLink>
                <NavLink className={getLinkClassName} end to="/matsushimaViernes">
                  Viernes
                </NavLink>
                <NavLink className={getLinkClassName} end to="/matsushimaSabado">
                  Sábado
                </NavLink>
                <NavLink className={getLinkClassName} end to="/matsushimaDomingo">
                  Domingo
                </NavLink>
              </div>
            )}
          </div>

          <NavLink className={getLinkClassName} end to="/menu">
            Menú
          </NavLink>

          <NavLink className={getLinkClassName} end to="/">
            Órdenes
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
