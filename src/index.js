import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page";
import App from "./components/App";
import Home from "./components/Home";
import Session from "./components/Session";
import Seat from "./components/Seat";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "sessoes/:idFilme",
                element: <Session />,
            },
            {
                path: "assentos/:idSessao",
                element: <Seat />,
            },

        ],
    },
]);

ReactDOM.render(<RouterProvider router={router} />, document.querySelector(".root"));