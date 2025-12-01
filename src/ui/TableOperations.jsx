import styled from 'styled-components';
import { respond } from '../utils/mixins';

const TableOperations = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    ${respond('tab-port')`
        justify-content: space-between;
    `}
`;

export default TableOperations;
