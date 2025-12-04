import styled from 'styled-components';
import { respond } from '../utils/mixins';

const TableOperations = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;

    ${respond('tab-port')`
        justify-content: space-between;
    `}
`;

export default TableOperations;
