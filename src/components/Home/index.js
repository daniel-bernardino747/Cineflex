import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, TitlePage, Catalog } from "./style";
import Film from "../Film";

export default function Home() {
    const [filmsList, setFilmsList] = useState([]);

    useEffect(() => {

        const url = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promise = axios.get(url);

        promise.then(answer => setFilmsList(answer.data));
        promise.catch(error => alert(error));

    }, []);

    return (
        <Container>

            <TitlePage>Selecione o filme</TitlePage>

            <Catalog>
                {filmsList.map(i => <Film key={i.id} movie={i} />)}
            </Catalog>

        </Container>
    );
};