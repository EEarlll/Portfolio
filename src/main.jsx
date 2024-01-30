import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cursor from "./Components/Cursor.jsx";
import Project from "./pages/Project.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" exact>
        <Route index element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Route>
    </>
  ),
  { basename: "/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Cursor></Cursor>
    <RouterProvider router={router} />
  </React.StrictMode>
);
