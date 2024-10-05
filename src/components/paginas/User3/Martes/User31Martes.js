// //Este es el archivo para agregar pedidos
import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FirebaseContext } from "../../../../firebase";
import { useNavigate } from "react-router-dom";
import FileUploader from "react-firebase-file-uploader";

import imagenDefecto from "../../../../fotos2/autos.jpeg";

import { parse, isDate } from "date-fns";

const User31Martes = () => {
  // Estado para las imágenes
  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgreso] = useState(0);
  const [urlimagen, guardarUrlimagen] = useState("");

  // URL de imagen por defecto
  const imagenPorDefecto = imagenDefecto;

  // Context con las operaciones de Firebase
  const { firebase } = useContext(FirebaseContext);

  // Hook para redireccionar
  const navigate = useNavigate();

  // Orden para los días de la semana
  const categoria = {
    lunes: "lunes",
    martes: "martes",
    miercoles: "miercoles",
    jueves: "jueves",
    viernes: "viernes",
    sabado: "sabado",
    domingo: "domingo",
  };

  // Validación y manejo del formulario
  const formik = useFormik({
    initialValues: {
      nombre: "",
      precio: "",
      fecha: "",
      fecha2: "",
      categoria: "martes",
      imagen: "",
      descripcion: "",
      descripcion2: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, "Los Platillos deben tener al menos 3 caracteres")
        .max(20, "Los platillos no pueden tener más de 20 caracteres")
        .required("El Nombre del platillo es obligatorio"),
      precio: Yup.string()
        .matches(
          /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
          "La hora debe estar en formato HH:mm"
        )
        .required("La hora es obligatoria"),
      fecha: Yup.date()
        .required("La fecha es obligatoria")

        .typeError("La fecha no es válida"), // Error si la fecha no tiene el formato correcto
      fecha2: Yup.date()
        .required("La fecha es obligatoria")

        .typeError("La fecha no es válida"), // Error si la fecha no tiene el formato correcto

      descripcion: Yup.string()
        .min(1, "La descripción debe ser más larga")
        .max(140, "La descripción no puede exceder los 150 caracteres")
        .required("La descripción es obligatoria"),
      descripcion2: Yup.string()
        .min(1, "La descripción debe ser más larga")
        .max(140, "La descripción no puede exceder los 150 caracteres")
        .required("La descripción es obligatoria"),
    }),
    onSubmit: (platillo) => {
      try {
        platillo.existencia = true;
        platillo.imagen = urlimagen || imagenPorDefecto; // Usa la imagen por defecto si no hay ninguna cargada
        platillo.orden = categoria[platillo.categoria.toLowerCase()];

        firebase.db.collection("user3Martes").add(platillo);

        // Redireccionar
        navigate("/user3Martes");
      } catch (error) {
        console.log(error);
      }
    },
  });

  // Manejo de imágenes
  const handleUploadStart = () => {
    guardarProgreso(0);
    guardarSubiendo(true);
  };
  const handleUploadError = (error) => {
    guardarSubiendo(false);
    console.log(error);
  };
  const handleUploadSuccess = async (nombre) => {
    guardarProgreso(100);
    guardarSubiendo(false);

    const url = await firebase.storage
      .ref("user3Martes")
      .child(nombre)
      .getDownloadURL();

    guardarUrlimagen(url);
  };
  const handleProgress = (progreso) => {
    guardarProgreso(progreso);
  };

  return (
    <>
      <h1 className="text-3xl font-light mb-4">User3 Martes</h1>

      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="categoria"
              >
                Dia de entrega
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="categoria"
                name="categoria"
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="martes">Martes</option>
              </select>
            </div>

            {formik.touched.categoria && formik.errors.categoria ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.categoria} </p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="precio"
              >
                Horario de Salida
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="precio"
                type="time"
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.precio && formik.errors.precio ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.precio} </p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre de la empresa
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Empresa"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.nombre && formik.errors.nombre ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.nombre} </p>
              </div>
            ) : null}

<div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fecha2"
              >
                Fecha de Salida
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fecha2"
                type="date"
                value={formik.values.fecha2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.fecha2 && formik.errors.fecha2 ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.fecha2} </p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="descripcion"
              >
                Lugar de carga
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                id="descripcion"
                placeholder="Direccion"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>

            {formik.touched.descripcion && formik.errors.descripcion ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.descripcion} </p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fecha"
              >
                Fecha de entrega
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fecha"
                type="date"
                value={formik.values.fecha}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.fecha && formik.errors.fecha ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.fecha} </p>
              </div>
            ) : null}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="descripcion2"
              >
                Lugar de descarga
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                id="descripcion2"
                placeholder="Direccion"
                value={formik.values.descripcion2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>

            {formik.touched.descripcion2 && formik.errors.descripcion2 ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.descripcion2} </p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="imagen"
              >
                Imagen
              </label>
              <FileUploader
                accept="image/*"
                id="imagen"
                name="imagen"
                randomizeFilename
                storageRef={firebase.storage.ref("user2Martes")}
                onUploadStart={handleUploadStart}
                onUploadError={handleUploadError}
                onUploadSuccess={handleUploadSuccess}
                onProgress={handleProgress}
              />
            </div>

            {subiendo && (
              <div className="h-12 relative w-full border">
                <div
                  className="bg-green-500 absolute left-0 top-0 text-white px-2 text-sm h-12 flex items-center"
                  style={{ width: `${progreso}%` }}
                >
                  {progreso} %
                </div>
              </div>
            )}

            {urlimagen && (
              <p className="bg-green-500 text-white p-3 text-center my-5">
                La imagen se subió correctamente
              </p>
            )}

            {/* Mostrar la imagen subida o la imagen por defecto */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Vista previa de la imagen
              </label>
              <img
                src={urlimagen || imagenPorDefecto} // Mostrar la imagen subida o la por defecto
                alt="Imagen"
                className="w-40 h-40 object-cover"
              />
            </div>

            <input
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
              value="Enviar"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default User31Martes;
