import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../../../firebase";
import Tomaoka2Viernes from "./Tomaoka2Viernes";

const TomaokaViernes = () => {
  //Definir el state para los platillos
  const [platillos, guardarPlatillos] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  //Consultar los datos al cargar
  useEffect(() => {
    const obtenerPlatillos = () => {
      firebase.db.collection("tomaokaViernes").onSnapshot(manejarSnapshot);
    };
    obtenerPlatillos();
  }, []);
  //Snapshot nos permite utilizar la base de datos en tiempo real de firestore

  function manejarSnapshot(snapshot) {
    const platillos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    //Almacenar los resultados en el state
    guardarPlatillos(platillos);
  }

  return (
    <div className="flex-1 overflow-y-auto p-6">
      {" "}
      {/* Scroll independiente */}
      <h1 className="text-3xl font-light mb-4">Tomaoka Viernes</h1>
      <Link
        to="/tomaoka1Viernes"
        className="bg-gray-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold"
      >
        Nuevo Pedido
      </Link>
      {platillos.map((platillo) => (
        <Tomaoka2Viernes key={platillo.id} platillo={platillo} />
      ))}
    </div>
  );
};

export default TomaokaViernes;
