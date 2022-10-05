import styled from 'styled-components';

export const Wrapper = styled.ul`
    padding: 43px 0;
`;

export const SessionToSelect = styled.li`
    width: 375px;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 35px;

    h1 {
        font-size: 20px;
        color: var(--dark);
        margin: 0 5px;
    }

    button {
        width: 83px;
        height: 43px;
        background: var(--clickable-color);
        border-radius: 3px;
        border: none;
        color: #fff;
        font-size: 18px;
        margin: 0 5px;
    }

    @media (max-width: 375px) {
        width: 250px;
    }
`;