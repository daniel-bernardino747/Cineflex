import styled from 'styled-components';

export const Container = styled.main`
    max-width: 768px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 610px) {
        max-width: 375px;
    }
`;

export const TitlePage = styled.h1`
    margin-top: 110px;
    color: var(--dark);
    font-size: 24px;
    text-align: center;
    user-select: none;
`;

export const Catalog = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 43px 30px;
    gap: 10px;

    @media (max-width: 360px) {
        justify-content: center;
    }
`;