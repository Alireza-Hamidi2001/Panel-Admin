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
        background-color: var(--color-primary-50);
        font-family: 'open-sans';
        position: relative;
        border-radius: 4px;
        padding: 1rem;
        width: max-content;
        font-size: 1.3rem;
        top: 0;
        transition: all 0.2s;
        text-transform: capitalize;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        ${respond('tab-port')`
            border-radius: 2px;
        `}

        &:hover {
            top: -2px;
        }

        &:disabled {
            filter: brightness(0.5);
        }
    `,
    secondary: css`
        color: var(--color-white);
        color: var(--color-dark-300);
        border: 1px solid var(--color-light-300);
        background: transparent;
        border-radius: 4px;
        font-family: 'open-sans';
        position: relative;
        top: 0;
        transition: all 0.1s;
        padding: 1rem;

        ${respond('tab-port')`
            font-size: 1.2rem;
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
    loginbtn: css`
        background: var(--color-primary-100);
        border-radius: 4px;
        color: var(--color-white);
        font-size: 1.6rem !important;
        font-family: 'open-sans';
        position: relative;
        top: 0;
        transition: all 0.2s;

        &:hover {
            top: -2px;
        }
    `,
    login: css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background: var(--color-font-light);
        font-family: 'open-sans';
        width: auto !important;
        color: var(--color-dark-300);

        position: relative;
        top: 0;
        transition: all 0.2s;

        &:hover {
            top: -2px;
        }
    `,
};

const StyledButton = styled.button`
    border: none;
    cursor: pointer;
    transition: all 0.2s;

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
    type,
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
