import { Container, Footer, Loading, TitlePage } from "../../GlobalStyle";
import { Position, SessionSeats } from './style';
import { useEffect, useState } from 'react';

import Forms from "../../components/Forms";
import { pullSessionSeats } from "../../services/get";
import { useParams } from 'react-router-dom';

export default function Seat({ setUserChoice }) {
    const [sessionInfos, setSessionInfos] = useState([]);
    const [positionSeat, setPositionSeat] = useState([]);
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");

    let { idSessao } = useParams();


    useEffect(() => {
        const request = pullSessionSeats(idSessao);
        request.then(ans => {
            setSessionInfos(ans.data);
            setPositionSeat(ans.data.seats);
        });
        request.catch(err => alert(err));

    }, [idSessao]);

    function handleSeat(seat) {
        if (seat.isAvailable === false) {
            return;
        };

        const newPositions = positionSeat.map((e) => {
            return e.id === seat.id ? { ...e, selected: !e.selected } : e;
        });

        setPositionSeat(newPositions);

    }

    return (
        <Container>
            <TitlePage>Selecione o(s) assento(s)</TitlePage>

            {sessionInfos.length !== 0 ? (
                <>
                    <SessionSeats>
                        {positionSeat.map((s) =>
                            <SingleSeat
                                key={s.id}
                                seat={s}
                                handleSeat={handleSeat}
                            />)}
                    </SessionSeats>

                    <Forms
                        positionSeat={positionSeat}
                        idSession={idSessao}
                        name={name}
                        setName={setName}
                        CPF={CPF}
                        setCPF={setCPF}
                        setUserChoice={setUserChoice} />

                    <Footer>
                        <div>
                            <img src={sessionInfos.movie.posterURL} alt={sessionInfos.movie.title} />
                        </div>
                        <section>
                            <p>{sessionInfos.movie.title}</p>
                            <p>{sessionInfos.day.weekday} - {sessionInfos.name}</p>
                        </section>
                    </Footer>
                </>
            ) : <Loading>Carregando...</Loading>}
        </Container >
    );
};

function SingleSeat({ seat, handleSeat }) {
    return (
        <>
            {!seat.selected ? (
                <Position
                    key={seat.id}
                    status={seat.isAvailable}
                    onClick={() => handleSeat(seat)}>
                    {seat.name}
                </Position>
            ) : (
                <Position
                    key={seat.id}
                    status="selected"
                    onClick={() => handleSeat(seat)}>
                    {seat.name}
                </Position>
            )}
        </>
    );
};