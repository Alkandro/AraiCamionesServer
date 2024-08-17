import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // Función para determinar las clases de `NavLink` basadas en si está activo
  const getLinkClassName = ({ isActive }) => 
    `p-4 ${isActive ? 'text-yellow-500 bg-gray-700' : 'text-gray-400'} block hover:bg-yellow-500 hover:text-gray-900`;

  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">
          株式会社 新井商運
        </p>

        <p className="mt-3 text-gray-600">Administrador</p>

        <nav className="mt-10">
          <NavLink
            className={getLinkClassName}
            end
            to="/matsushima"
          >
            Matsushima
          </NavLink>

          <NavLink
            className={getLinkClassName}
            end
            to="/tomaoka"
          >
            Tomaoka
          </NavLink>

          <NavLink
            className={getLinkClassName}
            end
            to="/hoshino"
          >
            Hoshino
          </NavLink>
         
          <NavLink
            className={getLinkClassName}
            end
            to="/menu"
          >
            Menu
          </NavLink>
         
          <NavLink
            className={getLinkClassName}
            end
            to="/"
          >
            Ordenes
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
