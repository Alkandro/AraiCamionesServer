// //Este es el archivo para agregar pedidos
import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FirebaseContext } from "../../../../firebase";
import { useNavigate } from "react-router-dom";
import FileUploader from "react-firebase-file-uploader";

import imagenDefecto from "../../../../fotos2/autos.jpeg";

import { parse, isDate } from "date-fns";

const Sklar1 = () => {
  // Estado para las imágenes
  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgreso] = useState(0);
  const [urlimagen, guardarUrlimagen] = useState("");

  // Estados para el PDF
  const [subiendoPdf, guardarSubiendoPdf] = useState(false);
  const [progresoPdf, guardarProgresoPdf] = useState(0);
  const [urlPdf, guardarUrlPdf] = useState("");

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
      categoria: "lunes",
      imagen: "",
      descripcion: "",
      descripcion2: "",
      pdf: ""
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
        platillo.pdf = urlPdf || ""; // Guardamos la URL del PDF si existe

        firebase.db.collection("sklar").add(platillo);

        // Redireccionar
        navigate("/sklar");
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
      .ref("sklar")
      .child(nombre)
      .getDownloadURL();

    guardarUrlimagen(url);
  };
  const handleProgress = (progreso) => {
    guardarProgreso(progreso);
  };

  // Manejo de PDFs
  const handleUploadStartPdf = () => {
    guardarProgresoPdf(0);
    guardarSubiendoPdf(true);
  };
  const handleUploadErrorPdf = (error) => {
    guardarSubiendoPdf(false);
    console.log(error);
  };
  const handleUploadSuccessPdf = async (nombre) => {
    guardarProgresoPdf(100);
    guardarSubiendoPdf(false);

    const url = await firebase.storage
      .ref("sklar-pdfs") // Puedes cambiar la ruta a la carpeta que desees
      .child(nombre)
      .getDownloadURL();

    guardarUrlPdf(url);
  };
  const handleProgressPdf = (progreso) => {
    guardarProgresoPdf(progreso);
  };

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Sklar Lunes</h1>

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
                <option value="lunes">Lunes</option>
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
                htmlFor="pdf"
              >
                Documento PDF (opcional)
              </label>
              <FileUploader
                accept="application/pdf"
                id="pdf"
                name="pdf"
                randomizeFilename
                storageRef={firebase.storage.ref("sklar-pdfs")} 
                onUploadStart={handleUploadStartPdf}
                onUploadError={handleUploadErrorPdf}
                onUploadSuccess={handleUploadSuccessPdf}
                onProgress={handleProgressPdf}
              />
            </div>

            {subiendoPdf && (
              <div className="h-12 relative w-full border mb-4">
                <div
                  className="bg-blue-500 absolute left-0 top-0 text-white px-2 text-sm h-12 flex items-center"
                  style={{ width: `${progresoPdf}%` }}
                >
                  {progresoPdf} %
                </div>
              </div>
            )}

            {urlPdf && (
              <p className="bg-blue-500 text-white p-3 text-center my-5">
                El PDF se subió correctamente: 
                <a href={urlPdf} target="_blank" rel="noopener noreferrer" className="underline ml-2">
                  Ver PDF
                </a>
              </p>
            )}

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
                storageRef={firebase.storage.ref("sklar")}
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

export default Sklar1;
