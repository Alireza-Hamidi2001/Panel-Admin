import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import Header from '../components/Header';
import { respond } from '../utils/mixins';

function AppLayout() {
    const Applayout_styled = styled.div`
        display: grid;
        grid-template-columns: 26rem 1fr;
        grid-template-rows: auto 1fr;
        color: var(--color-font-dark);
        height: 100vh;

        ${respond('tab-port')`
            grid-template-columns: 20rem 1fr;
        `}
        ${respond('phone')`
            grid-template-columns: 17rem 1fr;
        `}
    `;

    const Main = styled.main`
        background-color: var(--color-cream-100);
        padding: 4rem;
        font-size: 1.5rem;
        overflow: auto;

        ${respond('tab-port')`
            padding: 2rem;
        `}
        ${respond('phone')`
            padding: 1rem;
        `}
    `;

    const Container = styled.div`
        max-width: 120rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
    `;

    return (
        <Applayout_styled>
            <Header />
            <Sidebar />
            <Main>
                <Container>
                    <Outlet />
                </Container>
            </Main>
        </Applayout_styled>
    );
}

export default AppLayout;
