import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import ErrorPage from "./error-page";
import App from "./components/App";


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 index: true,
//                 element: <Home />
//             },
//             {
//                 path: "sessoes/:idFilme",
//                 element: <Session />,
//             },
//             {
//                 path: "assentos/:idSessao",
//                 element: <Seat />,
//             },
//             {
//                 path: "sucesso",
//                 element: <Sucess />
//             }

//         ],
//     },
// ]);

ReactDOM.render(<App />, document.querySelector(".root"));