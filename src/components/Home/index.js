import React, { useState } from "react";
import { Container, TitlePage, Catalog } from "./style";

import Film from "../Film";

export default function Home() {
    const [titlePage, setTitlePage] = useState('Selecione o filme');
    const [filmsList, setFilmsList] = useState(
        [
            { nome: 1, imagem: 'https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg' },
            { nome: 2, imagem: 'https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg' },
            { nome: 2, imagem: 'https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg' },
            { nome: 2, imagem: 'https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg' },
            { nome: 2, imagem: 'https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg' },
            { nome: 2, imagem: 'https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg' },
            { nome: 2, imagem: 'https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg' },
            { nome: 2, imagem: 'https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg' }
        ]);

    return (
        <Container>

            <TitlePage>{titlePage}</TitlePage>

            <Catalog>
                {filmsList.map(i => <Film movie={i} />)}
            </Catalog>

        </Container>
    );
};