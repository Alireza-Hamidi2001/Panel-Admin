import styled, { css } from 'styled-components';
import { respond } from '../utils/mixins';

const sizes = {
    small: css`
        font-size: 1.2rem;
        padding: 0.4rem 0.8rem;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;
    `,
    medium: css`
        font-size: 1.4rem;
        padding: 0.8rem 1.6rem;
        font-weight: 500;
    `,
    large: css`
        font-size: 1.6rem;
        padding: 1.2rem 2.4rem;
        font-weight: 500;
    `,
};

const variations = {
    primary: css`
        color: var(--color-white);
        background-color: var(--color-primary-200);
        font-family: 'open-sans';
        position: relative;
        padding: 0.8rem 2rem;
        font-size: 1.4rem;
        top: 0;
        transition: all 0.2s;
        
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        min-width: 15rem;
        min-height: 1.8rem;

        ${respond('tab-port')`
            padding: 0.7rem 1.4rem;
            font-size: 1.2rem;
        `}
        ${respond('phone')`
            padding: 0.5rem 2rem;
            min-width: auto;
            font-size: 1.2rem;
        `}

        &:hover {
            top: -2px;
        }
    `,
    secondary: css`
        color: var(--color-white);
        background: var(--color-red-200);
        border: 1px solid var(--color-grey-200);
        font-family: 'KottaOne';
        position: relative;
        top: 0;
        transition: all 0.1s;

        ${respond('tab-port')`
            font-size: 1.2rem;
            padding: 0.7rem 1.4rem;
        `}

        &:hover {
            top: -3px;
        }
    `,
    danger: css`
        color: var(--color-red-100);
        background-color: var(--color-red-700);

        &:hover {
            background-color: var(--color-red-800);
        }
    `,
    trash: css`
        background: transparent;
        width: auto !important;
    `,
    duplicate: css`
        background: transparent;
        width: auto !important;
    `,
};

const StyledButton = styled.button`
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.2s;
    /* max-width: 13rem; */

    &:disabled {
        filter: grayscale(0.8);

        &:hover {
            top: 0;
        }
    }

    ${(props) => sizes[props.size]}
    ${(props) => variations[props.variation]}
`;

function Button({
    children,
    onClick,
    variation = 'primary',
    size = 'medium',
    disabled,
}) {
    return (
        <StyledButton
            size={size}
            variation={variation}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
}

export default Button;
