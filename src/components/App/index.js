import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResetCSS, Header } from "../GlobalStyle";
import Home from "../Home";
import Session from "../Session";
import Seat from "../Seat";

import Sucess from "../Sucess";

export default function App() {
    const [userPurchase, setUserPurchase] = useState({});

    return (
        <>
            <ResetCSS />

            <Header>CINEFLEX</Header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="sessoes/:idFilme" element={<Session />} />
                    <Route path="assentos/:idSessao" element={<Seat setUserPurchase={setUserPurchase} />} />
                    <Route path="sucesso" element={<Sucess infos={userPurchase} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};