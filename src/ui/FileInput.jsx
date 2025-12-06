import styled from 'styled-components';
import { respond } from '../utils/mixins';

const FileInput = styled.input`
    font-size: 1.4rem;
    border-radius: 4px;

    background-color: transparent;
    border: 1px solid var(--color-cream-200);
    padding: 0.8rem 1.2rem;
    transition: all 0.2s;
    /* min-width: 100%; */

    &:focus {
        outline: none;
        box-shadow: 0 0 0.5rem black;
    }

    &::file-selector-button {
        font: inherit;
        padding: 0.8rem;
        margin-right: 1.2rem;
        border-radius: 8px;
        border: none;
        color: var(--color-white);
        background-color: var(--color-primary-100);

        cursor: pointer;
        transition: color 0.2s, background-color 0.2s;

        ${respond('tab-port')`
            font-size: 1.2rem;
            padding: 0.7rem 1.4rem;
        `}
        ${respond('phone')`
            margin-right: 0.8rem;
        `}

        &:hover {
            background-color: var(--color-gold);
        }
    }
`;

export default FileInput;
