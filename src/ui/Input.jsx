import styled from 'styled-components';

const Input = styled.input`
    border: none;
    border-bottom: 1px solid var(--color-light-300);
    color: var(--color-dark-200);
    background-color: transparent;
    padding: 0.8rem;
    font-size: 1.2rem;
    transition: all 0.2s;
    
    &::placeholder {
        color: var(--color-dark-100);
        font-size: 1.2rem;
    }
    
    &:focus {
        outline: none;
        border-bottom: 1px solid var(--color-dark-300);
    }
`;

export default Input;
