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
    box-shadow: 0 0 0.5rem black;
    transition: all 0.2s;
    margin: 0 auto;

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
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-dark-300);
    font-family: 'KottaOne';

    ${respond('tab-port')`
    font-size: 1.4rem;
    `}
    ${respond('phone')`
        font-size: 1.2rem;
    `}
`;

const Capacity = styled.div`
    font-family: 'KottaOne';
    font-size: 1.6rem;
    font-weight: 500;

    ${respond('tab-port')`
    font-size: 1.4rem;
    `}
    ${respond('phone')`
        font-size: 1rem;
    `}
`;

const Price = styled.div`
    font-family: 'KottaOne';
    font-size: 1.6rem;
    font-weight: 500;

    ${respond('tab-port')`
    font-size: 1.4rem;
    `}
    ${respond('phone')`
        font-size: 1rem;
    `}
`;

const Discount = styled.div`
    text-align: center;
    font-family: 'KottaOne';
    font-weight: 600;
    color: var(--color-green-100);
    text-align: center;

    & > p:first-child {
        color: var(--color-dark-300);
        text-decoration: line-through;
        font-weight: 500;
    }

    & p {
        font-size: 1.6rem;

        ${respond('tab-port')`
        font-size: 1.4rem;
        `}

        ${respond('phone')`
        font-size: 1rem;
        `}
    }
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
};
