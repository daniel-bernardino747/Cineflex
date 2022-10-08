import styled from 'styled-components';

export const Form = styled.form`
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
        margin-top: 10px;
        color: var(--dark);
        font-size: 18px;
    }
`;
export const InputText = styled.input.attrs({ type: 'text' })`
    height: 51px;
    margin: 5px 0;
    border: 1px solid var(--default-color);
    border-radius: 3px;
    font-size: 18px;

    &::placeholder {
        padding: 10px;
        color: #afafaf;
        font-style: italic;
    }
`;
export const Submit = styled.input.attrs({ type: 'submit' })`
    width: 225px;
    height: 42px;
    margin: 50px 0 150px 0;
    border: none;
    border-radius: 3px;
    color: #FFF;
    font-size: 18px;
    background: var(--clickable-color);
`;