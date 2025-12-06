import styled, { css } from 'styled-components';

const StyledFormRow = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 24rem 1fr 1.2fr;
    gap: 2.4rem;
    padding: 1.2rem 0;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
        margin-top: 4rem;
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }

    &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
    }
    ${(props) =>
        props.type === 'signup' &&
        css`
            grid-template-columns: 1fr;
            /* width: 70%; */
        `}
`;

const Error = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;

function FormRow({ error, children, type }) {
    return (
        <StyledFormRow type={type}>
            {children}
            {error && <Error>{error}</Error>}
        </StyledFormRow>
    );
}

export default FormRow;
