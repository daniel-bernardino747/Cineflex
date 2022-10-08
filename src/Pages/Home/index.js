import { Catalog, Container, TitlePage } from "./style";
import React, { useEffect, useState } from "react";

import Film from "../../components/Film";
import { pullFilmsCatalog } from "../../services/get";

export default function Home() {
    const [filmsCatalog, setFilmsCatalog] = useState([]);

    useEffect(() => {
        const request = pullFilmsCatalog();
        request.then(ans => setFilmsCatalog(ans.data));
        request.catch(err => alert(err));

    }, []);

    return (
        <Container>
            <TitlePage>Selecione o filme</TitlePage>

            <Catalog>
                {filmsCatalog.map(f => <Film key={f.id} movie={f} />)}
            </Catalog>
        </Container>
    );
};