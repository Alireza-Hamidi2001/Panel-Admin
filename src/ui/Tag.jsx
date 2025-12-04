import styled from 'styled-components';
import { respond } from '../utils/mixins';

const Tag = styled.p`
    width: fit-content;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.2rem 1.2rem;
    border-radius: 100px;
    text-align: left;

    /* border-right: 1px solid var(--color-main-border); */

    /* Make these dynamic, based on the received prop */
    color: ${(props) => `var(--color-${props.type}-700)`};
    background-color: ${(props) => `var(--color-${props.type}-100)`};
    box-shadow: 0 0 0.3rem
        ${(props) => `var(--color-${props.type}-700)`};

    ${respond('tab-port')`
        font-size: 0.7rem;
        padding: 0.2rem 0.6rem;
        box-shadow: none
        `}
    ${respond('phone')`
        font-size: 0.5rem;
        box-shadow: none
    `}

`;

export default Tag;
