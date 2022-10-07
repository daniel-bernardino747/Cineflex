import styled from 'styled-components';

export const InfosPurchase = styled.section`
    margin-top: 43px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        margin-bottom: 15px;
        width: 375px;
    }

    h1 {
        font-size: 24px;
        font-weight: 700;
        color: var(--dark);
        padding: 10px 0;
    }

    p {
        font-size: 22px;
        font-weight: 400;
        color: var(--dark);
        padding: 2px 0;
    }

    button {
        background: var(--clickable-color);
        width: 225px;
        height: 42px;
        border-radius: 3px;
        border: none;
        margin: 70px 0;
        font-size: 18px;
        color: #FFF;
    }
`;