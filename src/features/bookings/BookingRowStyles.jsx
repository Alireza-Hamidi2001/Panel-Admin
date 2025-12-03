import styled from 'styled-components';
import { respond } from '../../utils/mixins';

const Cabin = styled.p`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-dark-300);
    font-family: 'KottaOne';
    text-align: center;
    border-right: 1px solid var(--color-main-border);

    ${respond('tab-port')`
        font-size: var(--font-tab);
        border-right: none;
        `}
    ${respond('phone')`
        font-size: var(--font-mobile);
        border-right: none;
    `}
`;

const StackedOne = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    border-right: 1px solid var(--color-main-border);

    ${respond('tab-port')`
            border-right: none;
        `}

    & span:first-child {
        font-weight: 500;
        font-size: 1.4rem;
        color: var(--color-dark-300);

        text-align: left;

        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 0.5rem;
        
        ${respond('tab-port')`
            font-size: 0.7rem;
            gap: 0.3rem;
        `}
    }

    & span:last-child {
        color: var(--color-dark-200);
        font-size: 1.2rem;

        display: flex;
        align-items: center;
        gap: 0.3rem;

        ${respond('tab-port')`
            font-size: 0.5rem;
        `};
    }
`;
const StackedTwo = styled.p`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    text-align: left;

    border-right: 1px solid var(--color-main-border);

    ${respond('tab-port')`
            border-right: none;
        `}

    & span:first-child {
        font-weight: 500;
        font-size: 1.4rem;
        color: var(--color-dark-300);

        display: flex;
        gap: 0.2rem;

        & p {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            gap: 0.5rem;

            ${respond('tab-port')`
            font-size: 0.6rem;
            flex-direction:column;
            gap: 0.3rem;
        `}
        }

        ${respond('tab-port')`
            font-size: 0.8rem;
            flex-direction:column;
        `}

    }

    & span:last-child {
        color: var(--color-dark-200);
        font-size: 1.2rem;

        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 0.3rem;
        
        ${respond('tab-port')`
            font-size: 0.4rem;
            gap: 0.2rem;
        `};
    }
`;

const Amount = styled.div`
    display: flex;
    gap: 0.5rem;
    text-align: left;
    font-family: 'KottaOne';
    font-size: 1.3rem;
    font-weight: 500;

    ${respond('tab-port')`
        font-size: var(--font-mobile);
    `}
    ${respond('phone')`
        font-size: 0.8rem;
    `}
`;

export { Amount, StackedOne, StackedTwo, Cabin };
