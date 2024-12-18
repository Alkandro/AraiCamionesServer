//para modificar los datos
import React, { useContext, useRef, useState } from "react";
import { FirebaseContext } from "../../../../firebase";
import { FaTrash, FaEdit } from "react-icons/fa";
import FileUploader from "react-firebase-file-uploader";

const Sklar2 = ({ platillo }) => {
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
    pdf, // Se agrega el campo pdf
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
  const [subiendoPdf, setSubiendoPdf] = useState(false);
  const [progresoPdf, setProgresoPdf] = useState(0);
  const [nuevaPdf, setNuevaPdf] = useState(null);
  const [urlPdf, setUrlPdf] = useState(pdf || "");

  const actualizarDisponibilidad = () => {
    const nuevaExistencia = existenciaRef.current.value === "true";
    setDisponibilidad(nuevaExistencia);
    try {
      firebase.db.collection("sklar").doc(id).update({
        existencia: nuevaExistencia,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarPedido = () => {
    try {
      firebase.db.collection("sklar").doc(id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarPlatillo = async () => {
    try {
      let nuevaUrlImagen = imagen; // Usar la URL existente como predeterminada
      let nuevaUrlPdf = urlPdf; // Usar la URL existente del PDF
      // Si hay una nueva imagen seleccionada, subirla a Firebase Storage
      if (nuevaImagen) {
        const storageRef = firebase.storage.ref();
        const imagenRef = storageRef.child(`sklar/${nuevaImagen.name}`);
        await imagenRef.put(nuevaImagen);
        nuevaUrlImagen = await imagenRef.getDownloadURL();
      }
      // Si hay un nuevo PDF seleccionado, subirlo a Firebase Storage
      if (nuevaPdf) {
        const storageRef = firebase.storage.ref();
        const pdfRef = storageRef.child(`sklar-pdfs/${nuevaPdf.name}`);
        await pdfRef.put(nuevaPdf);
        nuevaUrlPdf = await pdfRef.getDownloadURL();
      }

      // Actualizar el documento en la colección de Firebase
      await firebase.db.collection("sklar").doc(id).update({
        nombre: nuevoNombre,
        categoria: nuevaCategoria,
        descripcion: nuevaDescripcion,
        descripcion2: nuevaDescripcion2,
        precio: nuevoPrecio,
        fecha: nuevaFecha,
        fecha2: nuevaFecha2,
        imagen: nuevaUrlImagen,
        pdf: nuevaUrlPdf, // Actualizar la URL del PDF
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
  // Handlers para el PDF
  const handleUploadStartPdf = () => {
    setProgresoPdf(0);
    setSubiendoPdf(true);
  };

  const handleUploadErrorPdf = (error) => {
    setSubiendoPdf(false);
    console.log(error);
  };

  const handleUploadSuccessPdf = async (nombre) => {
    setProgresoPdf(100);
    setSubiendoPdf(false);

    const url = await firebase.storage
      .ref("sklar-pdfs")
      .child(nombre)
      .getDownloadURL();

    setUrlPdf(url);
  };

  const handleProgressPdf = (progreso) => {
    setProgresoPdf(progreso);
  };

  const handlePdfChange = (e) => {
    if (e.target.files.length > 0) {
      setNuevaPdf(e.target.files[0]);
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
                <label className="block mt-2 sm:w-2/4">Empresa</label>
                <input
                  type="text"
                  className="mb-2 p-3 border border-gray-300 rounded"
                  value={nuevoNombre}
                  onChange={(e) => setNuevoNombre(e.target.value)}
                  maxLength={26}
                />
                <label className="block mt-2 sm:w-2/4">Lugar de Carga</label>

                <textarea
                  className="mb-2 p-3 border border-gray-300 rounded w-full"
                  value={nuevaDescripcion}
                  onChange={(e) => setNuevaDescripcion(e.target.value)}
                  maxLength={120}
                ></textarea>
                <label className="block mt-2 sm:w-2/4">Lugar de descarga</label>
                <textarea
                  className="mb-2 p-3 border border-gray-300 rounded w-full"
                  value={nuevaDescripcion2}
                  onChange={(e) => setNuevaDescripcion2(e.target.value)}
                  maxLength={120}
                ></textarea>
                <label className="block mt-2 sm:w-2/4">Horario de salida</label>
                <input
                  type="time"
                  className="mb-2 p-3 border border-gray-300 rounded w-full"
                  value={nuevoPrecio}
                  onChange={(e) => setNuevoPrecio(e.target.value)}
                />

                <label className="block mt-2 sm:w-2/4">Fecha de carga</label>
                <input
                  type="date"
                  className="mb-2 p-3 border border-gray-300 rounded w-full"
                  value={nuevaFecha2}
                  onChange={(e) => setNuevaFecha2(e.target.value)}
                />
                <label className="block mt-2 sm:w-2/4">Fecha de descarga</label>
                <input
                  type="date"
                  className="mb-2 p-3 border border-gray-300 rounded w-full"
                  value={nuevaFecha}
                  onChange={(e) => setNuevaFecha(e.target.value)}
                />
                {/* Campo para seleccionar una nueva imagen */}
                <input
                  type="file"
                  className="mb-4 p-3 border border-gray-300 rounded w-full"
                  onChange={handleImageChange}
                />
                 {/* Campo para seleccionar un nuevo PDF */}
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
                    El PDF se subió correctamente:{" "}
                    <a
                      href={urlPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline ml-2"
                    >
                      Ver PDF
                    </a>
                  </p>
                )}

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
                  <span className="text-gray-700 font-bold">{fecha2}</span>
                </p>
                <p className="text-gray-600 mb-4">
                  Fecha de descarga: {""}
                  <span className="text-gray-700 font-bold">{fecha}</span>
                </p>

                {pdf && (
                  <p className="text-gray-600 mb-4">
                    Documento PDF:{" "}
                    <a
                      href={pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline font-bold"
                    >
                       PDF
                    </a>
                  </p>
                )}
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

export default Sklar2;
