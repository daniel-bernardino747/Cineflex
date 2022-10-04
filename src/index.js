import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import ErrorPage from "./error-page";
import App from "./components/App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
]);

ReactDOM.render(<RouterProvider router={router} />, document.querySelector(".root"));