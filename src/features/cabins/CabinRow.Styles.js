import styled from 'styled-components';
import { respond } from '../../utils/mixins';

const Img = styled.img`
    display: block;
    width: 6.4rem;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5);
    cursor: pointer;
    box-shadow: 0 0 0.3rem var(--color-dark-300);
    transition: all 0.2s;

    &:hover {
        transform: scale(1.7) translateX(4px);
    }

    ${respond('tab-port')`
        width: 5.4rem;
    `}
    ${respond('phone')`
        width: 4.4rem;
    `}
`;

const Cabin = styled.div`
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--color-dark-300);
    font-family: 'noto';

    ${respond('tab-port')`
        font-size: var(--font-tab);
    `}
`;

const Capacity = styled.div`
    color: var(--color-dark-300);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'open-sans';
    font-size: 1.5rem;
    font-weight: 500;
    font-style: italic;

    ${respond('tab-port')`
        font-size: var(--font-tab);
        
        `}
    ${respond('phone')`
        font-size: var(--font-mobile);
        `}
`;

const Price = styled.div`
    color: var(--color-dark-300);
    font-family: 'noto';
    font-size: 1.6rem;
    font-weight: 500;

    ${respond('tab-port')`
        font-size: var(--font-tab);
    `}
`;

const Discount = styled.div`
    text-align: center;
    font-family: 'noto';
    font-weight: 500;
    color: var(--color-green-500);

    text-align: left;

    & > p:first-child {
        color: var(--color-dark-300);
        text-decoration: line-through;
        font-weight: 500;
    }

    & p {
        font-size: 1.6rem;

        ${respond('tab-port')`
            font-size: var(--font-tab);
            `}
    }
`;

const Discount_P = styled.p`
    color: red;
`;

const ButtonsContainer = styled.div``;
const Button = styled.button`
    background: transparent;
    border-radius: 4px;
    border: none;
    color: var(--color-cream-100);
    font-size: 1.4rem;
    cursor: pointer;

    transition: all 0.2s;
    position: relative;
    top: 0;

    &:hover {
        top: -2px;
    }
`;

export {
    // TableRow,
    Img,
    Cabin,
    Price,
    Discount,
    ButtonsContainer,
    Button,
    Capacity,
    Discount_P,
};
