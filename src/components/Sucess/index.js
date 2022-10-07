
import { Container, TitlePage } from "../GlobalStyle";
import { InfosPurchase } from "./style";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// idSession: "270"
// idsSeats: Array(1)
//     0: 13455
//     length: 1
// user: 
//     cpf: "12345"
//     name: "Daniel"

export default function Sucess({ infos }) {
    const [infosMovie, setInfosMovie] = useState();
    const { idSession, idsSeats, user } = infos;
    console.log(infosMovie);
    let seatsPosition;

    if (infosMovie) {
        seatsPosition = infosMovie.seats.filter(i => idsSeats.includes(i.id)).map(i => i.name);
        console.log("seatsPosition", seatsPosition);
    }

    let navigate = useNavigate();

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`;
        const promise = axios.get(url);

        promise.then(answer => setInfosMovie(answer.data));
    }, [])

    function formataCPF(cpf) {
        //retira os caracteres indesejados...
        cpf = cpf.replace(/[^\d]/g, "");

        //realizar a formatação...
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    return (
        <Container>
            <TitlePage sucess>Pedido feito com sucesso!</TitlePage>

            {infosMovie ? (
                <InfosPurchase>
                    <div>
                        <h1>Filme e sessão</h1>
                        <p>{infosMovie.movie.title}</p>
                        <p>{infosMovie.day.date} {infosMovie.name}</p>
                    </div>

                    <div>
                        <h1>Ingressos</h1>
                        {seatsPosition.map(i => <p>Assento {i}</p>)}
                    </div>

                    <div>
                        <h1>Comprador</h1>
                        <p>Nome: {user.name}</p>
                        <p>CPF: {formataCPF(user.cpf)}</p>
                    </div>

                    <button onClick={() => navigate("/")}>Voltar para Home</button>
                </InfosPurchase>
            ) : (
                <div>Carregando...</div>
            )}

        </Container >
    );
}