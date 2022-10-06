import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Container, TitlePage, Footer } from "../GlobalStyle";
import { Forms, Submit, InputText, Loading, SessionSeats, Position } from './style';

export default function Seat() {
    const [sessionInfos, setSessionInfos] = useState([]);
    const [positionSeat, setPositionSeat] = useState([])
    let { idSessao } = useParams();

    const selecteds = positionSeat.filter(e => e.selected === true);

    console.log("sessionInfos", sessionInfos);
    console.log("positionSeat", positionSeat);
    console.log("selecteds", selecteds);

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


            <Forms>
                <div>
                    <label htmlFor="bla">Nome do Comprador:</label>
                    <InputText type="text" id="bla" placeholder='Digite seu nome...' />
                    <label htmlFor="ble">CPF do Comprador:</label>
                    <InputText type="text" id="ble" placeholder='Digite seu CPF...' />
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