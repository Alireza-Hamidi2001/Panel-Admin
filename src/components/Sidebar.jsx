import styled from 'styled-components';
import Logo from './Logo';
import MainNav from '../ui/MainNav';
import { respond } from '../utils/mixins';
import Footer from '../pages/Footer';

const Sidebar_Styled = styled.aside`
    background-color: var(--color-white);
    padding: 2rem;
    font-size: 1.5rem;
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    justify-content: start;

    ${respond('tab-port')`
        padding:2rem 1rem;
    `}
    ${respond('phone')`
        padding:2rem 0.5rem;
        width: 6rem;

    `}
`;

function Sidebar() {
    return (
        <Sidebar_Styled>
            <Logo />
            <MainNav />
            <Footer />
        </Sidebar_Styled>
    );
}

export default Sidebar;
