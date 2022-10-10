import { Container, Footer, Loading, TitlePage } from "../../GlobalStyle";
import { SessionToSelect, Wrapper } from './style';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { pullMovieInfos } from "../../services/get";

export default function Session() {
    const [movieInfos, setMovieInfos] = useState();
    let { idFilme } = useParams();

    useEffect(() => {
        const request = pullMovieInfos(idFilme);
        request.then(ans => setMovieInfos(ans.data));
        request.catch(err => alert(err));

    }, [idFilme]);

    return (
        <Container>
            <TitlePage>Selecione o horário</TitlePage>

            {movieInfos ? (
                <>
                    <SessionOptions sessionDays={movieInfos.days} />

                    <Footer>
                        <div data-identifier="movie-img-preview">
                            <img src={movieInfos.posterURL} alt={movieInfos.title} />
                        </div>
                        <section data-identifier="movie-and-session-infos-preview">
                            <p>{movieInfos.title}</p>
                        </section>
                    </Footer>
                </>
            ) : <Loading>Carregando...</Loading>}
        </Container >
    );
};

function SessionOptions({ sessionDays }) {
    let navigate = useNavigate();

    return (
        <Wrapper data-identifier="session-date">
            {sessionDays.map((m) =>
                <SessionToSelect key={m.id}>
                    <h1>{m.weekday} - {m.date}</h1>

                    <div>
                        {m.showtimes.map(t =>
                            <button
                                data-identifier="hour-minute-btn"
                                key={t.id}
                                onClick={() => navigate(`/assentos/${t.id}`)}>
                                {t.name}
                            </button>
                        )}
                    </div>
                </SessionToSelect>
            )}
        </Wrapper>
    );
};
