import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Container, TitlePage, Footer } from "../GlobalStyle";
import { Forms, Submit, InputText, Loading, SessionSeats, Position } from './style';

export default function Seat({ setUserPurchase }) {
    const [sessionInfos, setSessionInfos] = useState([]);
    const [positionSeat, setPositionSeat] = useState([]);
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");

    let { idSessao } = useParams();
    let navigate = useNavigate();

    useEffect(() => {

        const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
        const promise = axios.get(url);

        promise.then(answer => {
            setSessionInfos(answer.data);
            setPositionSeat(answer.data.seats);
        });
        promise.catch(error => alert(error));

    }, []);

    function handleSeat(seat) {
        if (seat.isAvailable === false) {
            return;
        }

        const newPositions = positionSeat.map((e) => {
            return e.id === seat.id ? { ...e, selected: !e.selected } : e;
        });

        setPositionSeat(newPositions);

    }

    function submitValues(e) {
        e.preventDefault();

        const selecteds = positionSeat.filter(e => e.selected === true);
        const idSelecteds = selecteds.map(e => e.id);

        if (selecteds.length === 0) {
            return;
        }
        const body = {
            ids: idSelecteds,
            name: name,
            cpf: CPF
        }
        console.log(body);

        setUserPurchase({ idSession: idSessao, idsSeats: idSelecteds, user: { name: name, cpf: CPF } })

        const url = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
        const promise = axios.post(url, body);

        promise.then(() => navigate('/sucesso'));

        promise.catch(error => {
            alert(error);
            console.log(error);
        });

    }
    return (
        <Container>
            <TitlePage>Selecione o(s) assento(s)</TitlePage>

            {sessionInfos.length !== 0
                ? (
                    <SessionSeats>
                        {positionSeat.map((s) => <SingleSeat key={s.id} seat={s} handleSeat={handleSeat} />)}
                    </SessionSeats>
                )
                : <Loading>Carregando...</Loading>}


            <Forms onSubmit={submitValues}>
                <div>
                    <label htmlFor="bla">Nome do Comprador:</label>
                    <InputText
                        type="text"
                        id="bla"
                        name={name}
                        placeholder='Digite seu nome...'
                        onChange={(e) => setName(e.target.value)}
                        required />

                    <label htmlFor="ble">CPF do Comprador:</label>
                    <InputText
                        type="text"
                        id="ble"
                        name={CPF}
                        placeholder='Digite seu CPF...'
                        onChange={(e) => setCPF(e.target.value)}
                        pattern="[0-9]+$"
                        maxLength="11"
                        minLength="11"
                        required />
                </div>
                <Submit value="Reservar assento(s)" />
            </Forms>


            {sessionInfos.length !== 0 && (
                <Footer>
                    <div>
                        <img src={sessionInfos.movie.posterURL} alt={sessionInfos.movie.title} />
                    </div>
                    <section>
                        <p>{sessionInfos.movie.title}</p>
                        <p>{sessionInfos.day.weekday} - {sessionInfos.name}</p>
                    </section>
                </Footer>
            )}
        </Container >
    );
};

function SingleSeat({ seat, handleSeat }) {
    return (
        <>
            {!seat.selected ? (
                <Position key={seat.id} status={seat.isAvailable}
                    onClick={() => handleSeat(seat)}>
                    {seat.name}
                </Position>
            ) : (
                <Position key={seat.id} status="selected"
                    onClick={() => handleSeat(seat)}>
                    {seat.name}
                </Position>
            )}
        </>
    );
};