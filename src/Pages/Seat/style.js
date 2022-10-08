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
    height: 26px;
    border-radius: 30px;

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
    }}
`;