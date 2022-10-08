import styled from 'styled-components';

export const Wrapper = styled.ul`
    padding: 43px 0;
`;

export const SessionToSelect = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 375px;
    height: 85px;
    margin-bottom: 35px;

    h1 {
        margin: 0 5px;
        color: var(--dark);
        font-size: 20px;
    }

    button {
        width: 83px;
        height: 43px;
        margin: 0 5px;
        border: none;
        border-radius: 3px;
        color: #fff;
        font-size: 18px;
        background: var(--clickable-color);
    }

    @media (max-width: 375px) {
        width: 250px;
    }
`;