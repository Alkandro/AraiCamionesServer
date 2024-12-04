//Este codigo edita el mensaje 
import React, { useContext, useRef, useState, useEffect } from "react";
import { FirebaseContext } from "../../../../firebase";
import { FaTrash, FaEdit } from "react-icons/fa";
import "../../../../css/globalMensaje.css";


const Enrique2Mensaje = ({ platillo }) => {
  const existenciaRef = useRef(platillo.existencia);
  const { firebase } = useContext(FirebaseContext);
  const {
    id,
    nombre,
    imagen,
    existencia,
    categoria,
    descripcion,
    leido,
    fecha,
  } = platillo;

  const [disponibilidad, setDisponibilidad] = useState(existencia);
  const [editando, setEditando] = useState(false);
  const [nuevaDescripcion, setNuevaDescripcion] = useState(descripcion);
  const [nuevaImagen, setNuevaImagen] = useState(null);
  const [nuevaFecha, setNuevaFecha] = useState(fecha);
  const [leidoState, setLeidoState] = useState(leido || false);

  const actualizarDisponibilidad = () => {
    const nuevaExistencia = existenciaRef.current.value === "true";
    setDisponibilidad(nuevaExistencia);
    try {
      firebase.db.collection("enriqueMensaje").doc(id).update({
        existencia: nuevaExistencia,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarPedido = () => {
    try {
      firebase.db.collection("enriqueMensaje").doc(id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarPlatillo = async () => {
    try {
      let nuevaUrlImagen = imagen;
      if (nuevaImagen) {
        const storageRef = firebase.storage.ref();
        const imagenRef = storageRef.child(`enriqueMensaje/${nuevaImagen.name}`);
        await imagenRef.put(nuevaImagen);
        nuevaUrlImagen = await imagenRef.getDownloadURL();
      }

      await firebase.db.collection("enriqueMensaje").doc(id).update({
        descripcion: nuevaDescripcion,
        imagen: nuevaUrlImagen,
        fecha: nuevaFecha,
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

  const toggleLeido = async () => {
    const nuevoLeido = !leidoState;
    setLeidoState(nuevoLeido);
    try {
      await firebase.db.collection("enriqueMensaje").doc(id).update({
        leido: nuevoLeido,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.db
      .collection("enriqueMensaje")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setLeidoState(data.leido);
        }
      });

    return () => unsubscribe();
  }, [firebase, id]);

  return (
    <div className="w-full px-3 mb-4 relative" style={{ minHeight: "300px" }}>
      <div className="p-5 shadow-md bg-white h-full relative">
        <p className="text-gray-600 mb-4">
          Fecha: {""}
          <span className="text-gray-700 font-bold">{fecha}</span>
        </p>
        <div className="lg:flex">
          <div className="lg:w-5/12 xl:w-3/12">
            <img src={imagen} alt={`Imagen de ${nombre}`} />
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

          <div className="lg:w-7/12 xl:w-9/12 pl-9 relative">
            {editando ? (
              <div>
                {/* Campo para descripción */}
                <label className="block text-gray-700 font-bold mb-2">
                    Mensaje:
                  </label>
                <textarea
                  className="mb-2 p-3 border border-gray-300 rounded w-full"
                  value={nuevaDescripcion}
                  onChange={(e) => setNuevaDescripcion(e.target.value)}
                  maxLength={1500}
                ></textarea>

                {/* Campo para editar fecha */}
                <div className="mt-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Fecha:
                  </label>
                  <input
                    type="date"
                    className="p-3 border border-gray-300 rounded w-full"
                    value={nuevaFecha}
                    onChange={(e) => setNuevaFecha(e.target.value)}
                  />
                </div>
              </div>
            ) : (
              <div>
                <p className="font-bold text-2xl text-yellow-600 mb-4">
                  {nombre}
                </p>
                <p className="text-gray-600 mb-4">
                  Tipo: {""}
                  <span className="text-gray-700 font-bold">
                    {categoria.toUpperCase()}
                  </span>
                </p>
                <p className="text-gray-600 mb-4">
                  Mensaje enviado: {""}
                  <span className="text-gray-700 font-bold mensajeLimite">
                    {descripcion}
                  </span>
                </p>
                <p className="text-gray-600 mb-4">
                  Fecha: {""}
                  <span className="text-gray-700 font-bold">{fecha}</span>
                </p>
              </div>
            )}
            {/* Botones Save y Cancel */}
            {editando && (
              <div className="flex justify-end space-x-4 mt-6">
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
            {/* Checkbox Leído */}
            <div className="flex items-center mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  checked={leidoState}
                  disabled
                />
                {leidoState && (
                  <span className="ml-2 text-green-600 font-bold">Leído</span>
                )}
              </label>
            </div>
            {/* Botones Delete y Edit */}
            <div
              className={`flex justify-end space-x-4 ${editando ? "mt-4" : "mt-6"}`}
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


export default Enrique2Mensaje;
