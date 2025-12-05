import styled, { css } from 'styled-components';

const Form = styled.form`
    overflow: hidden;
    font-size: 1.4rem;
    background: var(--color-cream-100);

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
`;

export default Form;
