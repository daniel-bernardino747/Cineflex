import { Container, Loading, TitlePage } from "../../GlobalStyle";
import { useEffect, useState } from "react";

import { InfosPurchase } from "./style";
import { pullSessionSeats } from "../../services/get";
import { useNavigate } from "react-router-dom";

export default function Sucess({ userChoice }) {
    const { idSession, idsSeats, user } = userChoice;
    const [infosMovie, setInfosMovie] = useState();
    let navigate = useNavigate();
    let seatsPosition;

    if (infosMovie) {
        seatsPosition = infosMovie.seats.filter(i => idsSeats.includes(i.id)).map(i => i.name);
    };

    useEffect(() => {
        pullSessionSeats(idSession)
            .then(answer => setInfosMovie(answer.data));
    }, [idSession]);

    function formatCPF(cpf) {
        cpf = cpf.replace(/[^\d]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    };

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
                        <p>CPF: {formatCPF(user.cpf)}</p>
                    </div>

                    <button onClick={() => navigate("/")}>Voltar para Home</button>
                </InfosPurchase>

            ) : <Loading>Carregando...</Loading>}
        </Container >
    );
};