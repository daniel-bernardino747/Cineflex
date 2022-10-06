import styled from 'styled-components';

export const Forms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    div {
        display: flex;
        flex-direction: column;
        width: 375px; 
        padding: 0 20px;
    }

    label {
        font-size: 18px;
        color: var(--dark);
        margin-top: 10px;
    }
`;
export const SessionSeats = styled.ul`
    width: 375px;
    margin: 25px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
`;
export const InputText = styled.input.attrs({ type: 'text' })`
    height: 51px;
    font-size: 18px;
    border: 1px solid var(--default-color);
    border-radius: 3px;
    margin: 5px 0;

    &::placeholder {
        font-style: italic;
        padding: 10px;
        color: #afafaf;
    }
`;
export const Submit = styled.input.attrs({ type: 'submit' })`
    background: var(--clickable-color);
    width: 225px;
    height: 42px;
    border-radius: 3px;
    border: none;
    margin: 50px 0 150px 0;
    font-size: 18px;
    color: #FFF;
`;
export const Loading = styled.div`
    width: 375px;
    text-align: center;
    margin-top: 43px;
    font-size: 20px;
    color: var(--default-color);
`;
export const Position = styled.li`
    width: 26px;
    height: 26px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

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