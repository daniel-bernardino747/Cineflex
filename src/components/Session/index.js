
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { Container, TitlePage, Footer } from "../GlobalStyle";
import { SessionToSelect, Wrapper, Loading } from './style';

export default function Session() {
    const [movieInfos, setMovieInfos] = useState();
    let { idFilme } = useParams();

    useEffect(() => {

        const url = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
        const promise = axios.get(url);

        promise.then(answer => setMovieInfos(answer.data));
        promise.catch(error => alert(error));

    }, []);

    return (
        <Container>
            <TitlePage>Selecione o horário</TitlePage>

            {movieInfos
                ? <SessionOptions sessionDays={movieInfos.days} />
                : <Loading>Carregando...</Loading>
            }

            {movieInfos && (
                <Footer>
                    <div>
                        <img src={movieInfos.posterURL} />
                    </div>
                    <section>
                        <p>{movieInfos.title}</p>
                    </section>
                </Footer>
            )}
        </Container >
    );
};

function SessionOptions({ sessionDays }) {
    let navigate = useNavigate();

    return (
        <Wrapper>
            {sessionDays.map((m) =>
                <SessionToSelect key={m.id}>
                    <h1>{m.weekday} - {m.date}</h1>

                    <div>
                        {m.showtimes.map(t =>
                            <button onClick={() => navigate(`/assentos/${t.id}`)} key={t.id}>{t.name}</button>
                        )}
                    </div>
                </SessionToSelect>
            )}
        </Wrapper>
    );
};
