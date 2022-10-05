
import { Link } from 'react-router-dom';

import { Container, TitlePage } from "../GlobalStyle";

export default function Session() {
    return (
        <Container>
            <TitlePage>Selecione o horário</TitlePage>

            <div>
                <h2>Quinta-feira - 24/06/2022</h2>

                <div>
                    <Link to={`/assentos/1`}>
                        15h00
                    </Link>

                    <Link to={`/assentos/2`}>
                        19h00
                    </Link>
                </div>
            </div>

            <footer>

            </footer>
        </Container>
    );
};
