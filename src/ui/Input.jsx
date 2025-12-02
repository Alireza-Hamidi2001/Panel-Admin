import styled from 'styled-components';

const Input = styled.input`
    border: 1px solid var(--color-light-300);
    background-color: transparent;
    border-radius: 4px;
    padding: 0.8rem 1.2rem;
    box-shadow: var(--shadow-sm);
    transition: all 0.2s;
    font-family: 'open-sans';
    font-size: 1.4rem;
    color: var(--color-dark-200);
    letter-spacing: 1px;

    &::placeholder {
        color: var(--color-dark-100);
        font-family: 'Edu';
        font-size: 1.2rem;
        letter-spacing: 1px;
        word-spacing: 3px;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0.5rem black;
    }
`;

export default Input;
