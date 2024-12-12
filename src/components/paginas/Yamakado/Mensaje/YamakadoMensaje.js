import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../../../firebase";
import Yamakado2Mensaje from "./Yamakado2Mensaje";

const YamakadoMensaje = () => {
  // Definir el state para los platillos
  const [platillos, guardarPlatillos] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  // Consultar los datos al cargar
  useEffect(() => {
    const obtenerPlatillos = () => {
      firebase.db.collection("yamakadoMensaje").onSnapshot(manejarSnapshot);
    };
    obtenerPlatillos();
  }, [firebase]);

  // Snapshot nos permite utilizar la base de datos en tiempo real de firestore
  function manejarSnapshot(snapshot) {
    const platillos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    // Almacenar los resultados en el state
    guardarPlatillos(platillos);
  }

  return (
    <div className="flex-1 overflow-y-auto p-6">
      {" "}
      {/* Scroll independiente */}
      <h1 className="text-3xl font-light mb-4">Yamakado Mensaje</h1>
      <Link
        to="/yamakado1Mensaje"
        className="bg-gray-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold"
      >
        Mensaje
      </Link>
      {platillos.map((platillo) => (
        <Yamakado2Mensaje key={platillo.id} platillo={platillo} />
      ))}
    </div>
  );
};

export default YamakadoMensaje;