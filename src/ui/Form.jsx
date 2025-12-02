import styled, { css } from 'styled-components';

const Form = styled.form`
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
    

    overflow: hidden;
    font-size: 1.4rem;
`;

export default Form;
