import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">
          RestaurantApp
        </p>

        <p className="mt-3 text-gray-600">Administrador del restaurant:</p>

        <nav className="mt-10">
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            activeClassName="text-yellow-500"
            end={true}
            to="/"
          >
            Ordenes
          </NavLink>
          <NavLink
            className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"
            activeClassName="text-yellow-500"
            exact={true}
            to="/menu"
          >
            Menu
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;

// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";

// const Sidebar = () => {
//   const actualLocation = useLocation().pathname;
//   const locations = [
//     { to: "/", name: "Ordenes" },
//     { to: "/menu", name: "Menu" },
//   ];

//   return (
//     <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
//       <div className="p-6">
//         <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">
//           RestaurantApp
//         </p>

//         <p className="mt-3 text-gray-600">Administrador del restaurant:</p>

//         <nav>
//           {locations.map((value, index) => (
//             <NavLink
//               className={value.to === actualLocation ? "text-yellow-400" : null}
//               end={index}
//               to={value.to}
//             >
//               {value.name}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// };
// export default Sidebar;
