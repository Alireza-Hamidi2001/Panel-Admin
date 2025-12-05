import styled from 'styled-components';

const Input = styled.input`
    border: none;
    border-bottom: 1px solid var(--color-light-300);
    color: var(--color-dark-200);
    background-color: transparent;
    padding: 0.8rem 1.2rem;
    font-family: 'Edu';
    font-size: 1.4rem;
    transition: all 0.2s;
    
    &::placeholder {
        color: var(--color-dark-100);
        font-family: 'Edu';
        word-spacing: 4px;
        font-size: 1.4rem;
    }
    
    &:focus {
        outline: none;
        border-bottom: 1px solid var(--color-dark-300);
    }
`;

export default Input;
