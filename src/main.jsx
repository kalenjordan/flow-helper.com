import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Calendar from "./pages/Calendar.jsx";
import Mechanic from "./pages/Mechanic.jsx";
import Work from "./pages/Work.jsx";
import TagOrderForReturnedProducts from "./posts/TagOrderForReturnedProducts.jsx";
import AIProductHighlights from "./posts/AIProductHighlights.jsx";

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
    path: "/mechanic",
    element: <Mechanic />,
  },
  {
    path: "/hire",
    element: <Work />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/posts/tag-orders-for-returned-products-in-shopify-using-mesa",
    element: <TagOrderForReturnedProducts />,
  },
  {
    path: "/posts/ai-generated-product-highlights-for-shopify",
    element: <AIProductHighlights />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider api={api}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
