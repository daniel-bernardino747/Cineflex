import styled from 'styled-components';

export const InfosPurchase = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 43px;

    div {
        width: 375px;
        margin-bottom: 15px;
    }

    h1 {
        padding: 10px 0;
        color: var(--dark);
        font-weight: 700;
        font-size: 24px;
    }

    p {
        padding: 2px 0;
        color: var(--dark);
        font-weight: 400;
        font-size: 22px;
    }

    button {
        width: 225px;
        height: 42px;
        margin: 70px 0;
        border: none;
        border-radius: 3px;
        color: #FFF;
        font-size: 18px;
        background: var(--clickable-color);
    }
`;

export const NameUser = styled.p`
    text-transform:capitalize;
`;