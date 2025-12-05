import styled from 'styled-components';
import { respond } from '../utils/mixins';
import logo from './../assets/images/alireza3.png';
import HeaderMenu from '../ui/HeaderMenu';




const Header_styled = styled.header`
    background-color: var(--color-white);
    border: 1px solid var(--color-cream-100);
    color: var(--color-font-dark);
    font-size: 1.5rem;
    padding: 2rem;

    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: space-between;

    ${respond('phone')`
        grid-template-columns: 1fr 1fr ;
    `}
`;

const Img = styled.img`
    display: none;

    ${respond('phone')`
        display:block;
        width: 16rem;
    `}
`;

function Header() {
    return (
        <Header_styled>
            <Img src={logo} />
            <HeaderMenu />
        </Header_styled>
    );
}

export default Header;
