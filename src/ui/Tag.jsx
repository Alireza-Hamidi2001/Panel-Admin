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

    color: ${(props) => `var(--color-${props.type}-700)`};
    background-color: ${(props) => `var(--color-${props.type}-300)`};

    ${respond('tab-port')`
        font-size: 0.7rem;
        padding: 0.2rem 0.6rem;
        box-shadow: none
        `}
`;

export default Tag;
