import { Form, InputText, Submit } from './style';

import { pushPurchaseInfos } from "../../services/post";
import { useNavigate } from 'react-router-dom';

export default function Forms(props) {
    const {
        positionSeat,
        idSession,
        name,
        setName,
        CPF,
        setCPF,
        setUserChoice } = props;
    let navigate = useNavigate();

    function submitValues(e) {
        e.preventDefault();

        const selecteds = positionSeat.filter(e => e.selected === true);
        const idSelecteds = selecteds.map(e => e.id);

        if (selecteds.length === 0) {
            alert("Você não selecionou nenhum assento.");
            return;
        };

        const body = {
            ids: idSelecteds,
            name: name,
            cpf: CPF
        };

        setUserChoice(
            {
                idSession: idSession,
                idsSeats: idSelecteds,
                user: {
                    name: name,
                    cpf: CPF
                }
            });

        const request = pushPurchaseInfos(body);
        request.then(() => navigate('/sucesso'));
        request.catch(error => {
            alert(error);
            console.log(error);
        });
    };

    return (
        <Form onSubmit={submitValues}>
            <div>
                <label htmlFor="bla">Nome do Comprador:</label>
                <InputText
                    data-identifier="buyer-name-input"
                    type="text"
                    id="bla"
                    name={name}
                    placeholder='Digite seu nome...'
                    onChange={(e) => setName(e.target.value)}
                    required />

                <label htmlFor="ble">CPF do Comprador:</label>
                <InputText
                    data-identifier="buyer-cpf-input"
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
            <Submit data-identifier="reservation-btn" value="Reservar assento(s)" />
        </Form>
    );
};