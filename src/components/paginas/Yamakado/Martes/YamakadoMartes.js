import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../../../firebase";
import Yamakado2Martes from "./Yamakado2Martes";

const YamakadoMartes = () => {
  // Definir el state para los platillos
  const [platillos, guardarPlatillos] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  // Consultar los datos al cargar
  useEffect(() => {
    const obtenerPlatillos = () => {
      firebase.db.collection("yamakadoMartes").onSnapshot(manejarSnapshot);
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
      <h1 className="text-3xl font-light mb-4">Yamakado Martes</h1>
      <Link
        to="/yamakado1Martes"
        className="bg-gray-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold"
      >
        Nuevo Pedido
      </Link>
      {platillos.map((platillo) => (
        <Yamakado2Martes key={platillo.id} platillo={platillo} />
      ))}
    </div>
  );
};

export default YamakadoMartes;
