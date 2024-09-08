import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../../../firebase";
import Hoshino2Domingo from "./Hoshino2Domingo";

const HoshinoDomingo = () => {
  //Definir el state para los platillos
  const [platillos, guardarPlatillos] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  //Consultar los datos al cargar
  useEffect(() => {
    const obtenerPlatillos = () => {
      firebase.db.collection("hoshinoDomingo").onSnapshot(manejarSnapshot);
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
    <>
      <h1 className="text-3xl font-light mb-4">Hoshino Domingo</h1>
      <Link
        to="/hoshino1Domingo"
        className="bg-gray-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold"
      >
      Nuevo Pedido
      </Link>
      {platillos.map((platillo) => (
        <Hoshino2Domingo key={platillo.id} platillo={platillo} />
      ))}
    </>
  );
};
export default HoshinoDomingo;