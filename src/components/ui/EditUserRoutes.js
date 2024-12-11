import React from "react";
import { Route } from "react-router-dom";
import EditUser from "./EditUser";

const EditUserRoutes = [
  <Route key="edit-user" path="/edit-user" element={<EditUser />} />,
];

export default EditUserRoutes;
