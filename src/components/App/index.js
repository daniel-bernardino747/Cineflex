import React from "react";
import { Outlet } from "react-router-dom";
import { ResetCSS, Header } from "../GlobalStyle";

export default function App() {
    return (
        <>
            <ResetCSS />

            <Header>CINEFLEX</Header>
            <Outlet />
        </>
    );
};