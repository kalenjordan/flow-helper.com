import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Calendar from "./pages/Calendar.jsx";
import Work from "./pages/Work.jsx";

import { api } from "./lib/api";
import { Provider } from "@gadgetinc/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/work",
    element: <Work />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider api={api}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
