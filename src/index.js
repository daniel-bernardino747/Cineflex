import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import ErrorPage from "./error-page";
import App from "./components/App";
import Session from "./components/Session";
import Seat from "./components/Seat";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "sessoes/1",
                element: <Session />,
            },
            {
                path: "assentos/1",
                element: <Seat />,
            },
        ],
    },
]);

ReactDOM.render(<RouterProvider router={router} />, document.querySelector(".root"));