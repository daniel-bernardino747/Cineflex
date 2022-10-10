import styled from 'styled-components';

export const SessionSeats = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 375px;
    margin: 25px 0;
    gap: 12px;
`;
export const Position = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 25px;
    border-radius: 30px;
    font-size: 11px;
    cursor: pointer;
    user-select: none;
    border: ${props => {
        switch (props.status) {
            case "selected":
                return "1px solid #45BDB0"
            case true:
                return "1px solid #808F9D"
            case false:
                return "1px solid #F7C52B"
            default:
                return "1px solid #808F9D;"
        }
    }};
    background: ${props => {
        switch (props.status) {
            case "selected":
                return "var(--selected-color)"
            case true:
                return "var(--default-color)"
            case false:
                return "var(--unavailable-color)"
            default:
                return "var(--default-color)"
        }
    }};
`;

export const Captions = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 10px 0;
    color: #4E5A65;
    font-size: 13px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 7px 0;
    }
`;