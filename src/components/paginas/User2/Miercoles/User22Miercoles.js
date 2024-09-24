//para modificar los datos
import React, { useContext, useRef, useState } from "react";
import { FirebaseContext } from "../../../../firebase";
import { FaTrash, FaEdit } from "react-icons/fa";

const User22Miercoles = ({ platillo }) => {
  const existenciaRef = useRef(platillo.existencia);
  const { firebase } = useContext(FirebaseContext);
  const {
    id,
    nombre,
    imagen,
    existencia,
    categoria,
    precio,
    descripcion,
    descripcion2,
    fecha,
    fecha2,
  } = platillo;

  // Estado para manejar el color basado en la disponibilidad
  const [disponibilidad, setDisponibilidad] = useState(existencia);
  const [editando, setEditando] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(nombre);
  const [nuevaCategoria, setNuevaCategoria] = useState(categoria);
  const [nuevaDescripcion, setNuevaDescripcion] = useState(descripcion);
  const [nuevaDescripcion2, setNuevaDescripcion2] = useState(descripcion2);
  const [nuevoPrecio, setNuevoPrecio] = useState(precio);
  const [nuevaFecha, setNuevaFecha] = useState(fecha);
  const [nuevaFecha2, setNuevaFecha2] = useState(fecha2);
  const [nuevaImagen, setNuevaImagen] = useState(null); // Estado para la nueva imagen

  const actualizarDisponibilidad = () => {
    const nuevaExistencia = existenciaRef.current.value === "true";
    setDisponibilidad(nuevaExistencia);
    try {
      firebase.db.collection("user2Miercoles").doc(id).update({
        existencia: nuevaExistencia,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarPedido = () => {
    try {
      firebase.db.collection("user2Miercoles").doc(id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarPlatillo = async () => {
    try {
      let nuevaUrlImagen = imagen; // Usar la URL existente como predeterminada

      // Si hay una nueva imagen seleccionada, subirla a Firebase Storage
      if (nuevaImagen) {
        const storageRef = firebase.storage.ref();
        const imagenRef = storageRef.child(`user2Miercoles/${nuevaImagen.name}`);
        await imagenRef.put(nuevaImagen);
        nuevaUrlImagen = await imagenRef.getDownloadURL();
      }

      // Actualizar el documento en la colección de Firebase
      await firebase.db.collection("user2Miercoles").doc(id).update({
        nombre: nuevoNombre,
        categoria: nuevaCategoria,
        descripcion: nuevaDescripcion,
        descripcion2: nuevaDescripcion2,
        precio: nuevoPrecio,
        fecha: nuevaFecha,
        fecha2: nuevaFecha2,
        imagen: nuevaUrlImagen,
      });

      setEditando(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setNuevaImagen(e.target.files[0]);
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
                  className={`bg-white shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline ${
                    disponibilidad ? "text-blue-600" : "text-red-600"
                  }`}
                  value={existencia}
                  ref={existenciaRef}
                  onChange={actualizarDisponibilidad}
                >
                  <option value="true">Disponible</option>
                  <option value="false">No Disponible</option>
                </select>
              </label>
            </div>
          </div>
          <div className="lg:w-7/12 xl:w-9/12 pl-9">
            {editando ? (
              <div>
                <input
                  type="text"
                  className="mb-2 p-3 border border-gray-300 rounded"
                  value={nuevoNombre}
                  onChange={(e) => setNuevoNombre(e.target.value)}
                  maxLength={26}
                />

                <textarea
                  className="mb-2 p-3 border border-gray-300 rounded w-full"
                  value={nuevaDescripcion}
                  onChange={(e) => setNuevaDescripcion(e.target.value)}
                  maxLength={120}
                ></textarea>
                <textarea
                  className="mb-2 p-3 border border-gray-300 rounded w-full"
                  value={nuevaDescripcion2}
                  onChange={(e) => setNuevaDescripcion2(e.target.value)}
                  maxLength={120}
                ></textarea>
                <input
                  type="time"
                  className="mb-2 p-3 border border-gray-300 rounded w-full"
                  value={nuevoPrecio}
                  onChange={(e) => setNuevoPrecio(e.target.value)}
                />
                <input
                  type="date"
                  className="mb-2 p-3 border border-gray-300 rounded w-full"
                  value={nuevaFecha}
                  onChange={(e) => setNuevaFecha(e.target.value)}
                />
                <input
                  type="date"
                  className="mb-2 p-3 border border-gray-300 rounded w-full"
                  value={nuevaFecha2}
                  onChange={(e) => setNuevaFecha2(e.target.value)}
                />

                {/* Campo para seleccionar una nueva imagen */}
                <input
                  type="file"
                  className="mb-4 p-3 border border-gray-300 rounded w-full"
                  onChange={handleImageChange}
                />
              </div>
            ) : (
              <div>
                <p className="font-bold text-2xl text-yellow-600 mb-4">
                  {nombre}
                </p>
                <p className="text-gray-600 mb-4">
                  Dia de entrega: {""}
                  <span className="text-gray-700 font-bold">
                    {categoria.toUpperCase()}
                  </span>
                </p>
                <p className="text-gray-600 mb-4">
                  Lugar de carga: {""}
                  <span className="text-gray-700 font-bold">{descripcion}</span>
                </p>

                <p className="text-gray-600 mb-4">
                  Lugar de descarga: {""}
                  <span className="text-gray-700 font-bold">
                    {nuevaDescripcion2}
                  </span>
                </p>
                <p className="text-gray-600 mb-4">
                  Horario: {""}
                  <span className="text-gray-700 font-bold">{precio}</span>
                </p>
                <p className="text-gray-600 mb-4">
                  Fecha de carga: {""}
                  <span className="text-gray-700 font-bold">{fecha}</span>
                </p>
                <p className="text-gray-600 mb-4">
                  Fecha de descarga: {""}
                  <span className="text-gray-700 font-bold">{fecha2}</span>
                </p>
              </div>
            )}

            {/* Botones Save y Cancel */}
            {editando && (
              <div className="flex justify-end space-x-4 mb-4">
                <button
                  onClick={actualizarPlatillo}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditando(false)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Botones Delete y Edit */}
            <div
              className={`flex justify-end space-x-4 ${editando ? "mt-4" : ""}`}
            >
              <button
                onClick={eliminarPedido}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <FaTrash className="mr-2 text-xl" />
                DELETE
              </button>
              <button
                onClick={() => setEditando(true)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <FaEdit className="mr-2 text-xl" />
                EDIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User22Miercoles;
