import styled from 'styled-components';
import { respond } from '../utils/mixins';
import logo from './../assets/images/alireza3.png';

const Header_styled = styled.header`
    background-color: var(--color-white);
    border: 1px solid var(--color-cream-100);
    color: var(--color-font-dark);
    font-size: 1.5rem;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Img = styled.img`
    display: none;

    ${respond('phone')`
        display:block;
        width: 16rem;
    `}
`;
const P = styled.p`
    display: block;
    ${respond('phone')`
        display:none;
    `}
`;

function Header() {
    return (
        <Header_styled>
            <P>Header</P>
            <Img src={logo} />
        </Header_styled>
    );
}

export default Header;
