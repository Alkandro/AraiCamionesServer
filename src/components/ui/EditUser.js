import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../../firebase";

const EditUser = () => {
  const { firebase } = useContext(FirebaseContext);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");

  // Obtener lista de usuarios
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = await firebase.db.collection("users").get();
        const userList = usersCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };
    fetchUsers();
  }, [firebase]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setNewEmail(user.email);
    setNewUsername(user.username || "");
  };

  const handleUpdateUser = async () => {
    try {
      if (!selectedUser) {
        alert("Selecciona un usuario para modificar.");
        return;
      }

      if (newEmail || newPassword || newUsername) {
        const userDoc = firebase.db.collection("users").doc(selectedUser.id);

        const updates = {};
        if (newEmail) updates.email = newEmail;
        if (newUsername) updates.username = newUsername;

        await userDoc.update(updates);

        if (newPassword) {
          // Actualizar contraseña en Firebase Authentication
          const authUser = await firebase.auth.getUserByEmail(selectedUser.email);
          await firebase.auth.updateUser(authUser.uid, { password: newPassword });
        }

        alert("Usuario actualizado con éxito");
        setSelectedUser(null);
      }
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      alert("Hubo un problema al actualizar el usuario");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Editar Usuarios</h2>

      {!selectedUser ? (
        <>
          <h3 className="text-lg font-semibold mb-4">Usuarios registrados:</h3>
          <ul className="space-y-3">
            {users.map((user) => (
              <li
                key={user.id}
                className="p-4 border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectUser(user)}
              >
                <p className="font-bold">{user.username || "Sin nombre"}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdateUser();
          }}
        >
          <h3 className="text-lg font-semibold mb-4">
            Editar usuario: {selectedUser.username || "Sin nombre"}
          </h3>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded w-full"
              placeholder="Nuevo correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Contraseña</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-3 border border-gray-300 rounded w-full"
              placeholder="Nueva contraseña"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Nombre de Usuario</label>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="p-3 border border-gray-300 rounded w-full"
              placeholder="Nuevo nombre de usuario"
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Guardar Cambios
            </button>
            <button
              type="button"
              onClick={() => setSelectedUser(null)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditUser;
