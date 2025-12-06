import styled, { css } from 'styled-components';

const Form = styled.form`
    overflow: hidden;
    font-size: 1.4rem;
    background: var(--color-font-light);

    ${(props) =>
        props.type !== 'modal' &&
        css`
            padding: 2.4rem 4rem;
            /* Box */
            border: 1px solid var(--color-red);
        `}

    ${(props) =>
        props.type === 'modal' &&
        css`
            width: 80rem;
        `}
    ${(props) =>
        props.type === 'signup' &&
        css`
            display: flex;
            flex-direction: column;
            /* align-items: center; */
            justify-content: center;
            width: 50%;
            background: transparent;
            background: var(--color-light-100);
        `}
`;

export default Form;
