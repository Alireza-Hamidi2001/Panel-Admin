import styled from 'styled-components';

const Textarea = styled.textarea`
    padding: 0.8rem 1.2rem;
    border: 1px solid var(--color-light-300);
    border-radius: 5px;
    background-color: var(--color-cream-150);
    box-shadow: var(--shadow-sm);
    width: 100%;
    height: 8rem;
    transition: all 0.2s;

    &::placeholder {
      font-size: 1.4rem;
    }

    &:focus {
      outline: none;
        box-shadow: 0 0 0.5rem black;
    }
`;

export default Textarea;
