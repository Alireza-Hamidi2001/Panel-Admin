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
    box-shadow: 0 0 0.5rem var(--color-main-light);
    margin-bottom: 3rem;
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
    padding: 1.6rem 2.4rem;
    background-color: var(--color-main-dark);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: var(--color-light-200);
    font-family: 'Lime';
    text-align: left;
    letter-spacing: 1px;
    font-size: 1.4rem;

    ${respond('tab-port')`
        font-size: var(--font-tab);
        padding: 0.8rem 1.2rem;
        `}
    ${respond('phone')`
        font-size: var(--font-mobile);
        `}
`;

const StyledRow = styled(CommonRow)`
    padding: 2rem 3rem;
    background-color: #fff;
    text-align: center;

    ${respond('tab-port')`
        padding: 1rem 1.5rem;
        `}

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-main-border);
    }
`;

const StyledBody = styled.section`
    /* margin: 0.4rem 0; */
`;

const Footer = styled.footer`
    background-color: var(--color-dark-50);
    display: flex;
    justify-content: center;
    padding: 1.2rem;

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
