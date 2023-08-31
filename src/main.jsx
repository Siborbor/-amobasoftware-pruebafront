import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./routers/Layout.jsx";
import Facturacion from "./routers/Facturacion.jsx";
import Proforma from "./routers/Proforma.jsx";
import "./styles/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/facturacion",
        element: <Facturacion />,
      },
      {
        path: "/proforma",
        element: <Proforma />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
