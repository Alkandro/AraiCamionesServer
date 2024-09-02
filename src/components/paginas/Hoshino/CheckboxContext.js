import React, { createContext, useState, useContext } from "react";
import firebase from "../../../firebase"; // Asegúrate de que esta ruta es correcta

const CheckboxContext = createContext();

export const useCheckbox = () => useContext(CheckboxContext);

export const CheckboxProvider = ({ children }) => {
  const [checkboxState, setCheckboxState] = useState(false);

  const toggleCheckbox = () => {
    setCheckboxState((prev) => !prev);

    // Asegúrate de que db esté correctamente definido.
    const db = firebase.firestore(); // O usa firebase.database() si es Realtime Database

    // Si estás intentando guardar algo en Firestore cuando cambias el estado del checkbox
    try {
      db.collection("hoshino").add({
        checkboxState: !checkboxState,
      });
    } catch (error) {
      console.error("Error al actualizar el checkbox en Firestore", error);
    }
  };

  return (
    <CheckboxContext.Provider value={{ checkboxState, toggleCheckbox }}>
      {children}
    </CheckboxContext.Provider>
  );
};
