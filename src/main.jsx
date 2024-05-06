import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Calendar from "./pages/Calendar.jsx";
import "./main.css";
import { api } from "./lib/api";
import { Provider } from "@gadgetinc/react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider api={api}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
