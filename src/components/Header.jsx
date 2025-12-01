import styled from "styled-components";

const Header_styled = styled.header`
    background-color: var(--color-white);
    border: 1px solid var(--color-cream-100);
    color: var(--color-font-dark);
    font-size: 1.5rem;
    padding: 2rem;
`;

function Header() {
    return <Header_styled>Header</Header_styled>;
}

export default Header;
