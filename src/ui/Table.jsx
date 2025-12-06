import { createContext, useContext } from 'react';
import styled from 'styled-components';
import { respond } from '../utils/mixins';

// import Empty from './Empty';

const StyledTable = styled.div`
    font-size: 1.4rem;
    border-radius: 5px;
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
    margin-bottom: 3rem;
    /* border: 1px solid var(--color-light-300); */
`;

const CommonRow = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.columns};
    column-gap: 2.4rem;
    align-items: center;
    transition: none;

    ${respond('tab-land')`
        column-gap: 1.8rem;
        `}
    ${respond('tab-port')`
        column-gap: 1rem;
    `}
`;

const StyledHeader = styled(CommonRow)`
    padding: 1rem 2.4rem;
    background-color: var(--color-light-200);
    text-transform: uppercase;
    color: var(--color-dark-300);
    text-align: left;
    font-weight: 600;
    font-size: 1.5rem;

    ${respond('tab-port')`
        font-size: var(--font-tab);
        padding: 0.8rem 1.6rem;
    `}
`;

const StyledRow = styled(CommonRow)`
    padding: 2rem 3rem;
    background-color: var(--color-light-100);
    text-align: left;

    ${respond('tab-port')`
        padding: 1rem 1.5rem;
    `}

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-light-100);
    }
`;

const StyledBody = styled.section`
    /* margin: 0.4rem 0; */
    text-align: left;
`;

const Footer = styled.footer`
    background-color: var(--color-light-200);
    color: var(--color-dark-300);
    display: flex;
    justify-content: center;
    padding: 1rem;

    /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
    &:not(:has(*)) {
        display: none;
    }
`;

const Empty = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
    margin: 2.4rem;
`;

// 1.make a context
const TableContext = createContext();

function Table({ columns, children }) {
    return (
        <TableContext.Provider value={{ columns }}>
            <StyledTable role="table">{children}</StyledTable>
        </TableContext.Provider>
    );
}

function Header({ children }) {
    const { columns } = useContext(TableContext);
    return (
        <StyledHeader role="row" columns={columns} as="header">
            {children}
        </StyledHeader>
    );
}
function Row({ children }) {
    const { columns } = useContext(TableContext);
    return (
        <StyledRow role="row" columns={columns}>
            {children}
        </StyledRow>
    );
}
function Body({ data, render }) {
    if (!data.length) return <Empty>No data to show</Empty>;
    return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
