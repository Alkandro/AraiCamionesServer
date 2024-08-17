import React, { useContext, useRef } from "react";
import { FirebaseContext } from "../../../firebase";
import { FaTrash } from 'react-icons/fa';

const Tomaoka2 = ({ platillo }) => {
  //Existencia ref para acceder al valor directamente
  const existenciaRef = useRef(platillo.existencia);

  //contex de firebase para cambiar el la BD
  const { firebase } = useContext(FirebaseContext);

  const { id, nombre, imagen, existencia, categoria, precio, descripcion } =
    platillo;

  //modificar el estado del platillo en firebase

  const actualizarDisponibilidad = () => {
    const existencia = existenciaRef.current.value === "true";
    try {
      firebase.db.collection("tomaoka").doc(id).update({
        existencia,
      });
    } catch (error) {
      console.log(error);
    }
  };

   // Eliminar pedido de Firebase
   const eliminarPedido = () => {
    try {
      firebase.db.collection("tomaoka").doc(id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full px-3 mb-4">
      <div className="p-5 shadow-md bg-white">
        <div className="lg:flex">
          <div className="lg:w-5/12 xl:w-3/12">
            <img src={imagen} alt="imagen platillo" />

            <div className="sm:flex sm:-mx-2 pl-2">
              <label className="block mt-5 sm:w-2/4">
                <span className="block text-gray-800 mb-2">Existencia</span>
                <select
                  className=" bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={existencia}
                  ref={existenciaRef}
                  onChange={() => actualizarDisponibilidad()}
                >
                  <option value="true">Disponible</option>
                  <option value="false">No Disponible</option>
                </select>
              </label>
            </div>
          </div>
          <div className="lg:w-7/12 xl:w-9/12 pl-9">
            <p className="font-bold text-2xl text-yellow-600 mb-4">{nombre}</p>
            <p className="text-gray-600 mb-4">
              Categoria: {""}
              <span className="text-gray-700 font-bold">
                {categoria.toUpperCase()}
              </span>
            </p>
            <p className="text-gray-600 mb-4">{descripcion}</p>
            <p className="text-gray-600 mb-4">
              Precio: {""}
              <span className="text-gray-700 font-bold">¥{precio}</span>
            </p>

            <button
              onClick={eliminarPedido}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <FaTrash className="mr-2 text-xl" />
              DELETE
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Tomaoka2;