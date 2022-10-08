import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, ResetCSS } from "../../GlobalStyle";
import React, { useState } from "react";

import ErrorPage from "../../Pages/ErrorPage";
import Home from "../../Pages/Home";
import Seat from "../../Pages/Seat";
import Session from "../../Pages/Session";
import Sucess from "../../Pages/Sucess";

export default function App() {
    const [userChoice, setUserChoice] = useState({});

    return (
        <>
            <ResetCSS />
            <Header>CINEFLEX</Header>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                        errorElement={<ErrorPage />} />

                    <Route
                        path="sessoes/:idFilme"
                        element={<Session />}
                        errorElement={<ErrorPage />} />

                    <Route
                        path="assentos/:idSessao"
                        element={<Seat setUserChoice={setUserChoice} />}
                        errorElement={<ErrorPage />} />

                    <Route
                        path="sucesso"
                        element={<Sucess userChoice={userChoice} />}
                        errorElement={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};