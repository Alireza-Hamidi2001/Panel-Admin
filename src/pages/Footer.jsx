import styled from 'styled-components';
import { respond } from '../utils/mixins';

function Footer() {
    const FooterStyled = styled.footer`
        margin-top: auto;

        ${respond('tab-port')`
            padding: 1.5rem
        `}
    `;

    const CopyrightText2 = styled.p`
        font-family: 'KottaOne';
        font-size: 1.4rem;
        font-weight: 400;

        ${respond('tab-port')`
            font-size: 1.2rem;
        `}

        ${respond('phone')`
            font-size: 1rem;
        `}
    `;
    const CopyrightText1 = styled.p`
        font-family: 'Caveat';
        font-size: 2rem;
        font-weight: 600;
    `;

    const Copyright = styled.p`
        font-family: 'KottaOne';
    `;

    return (
        <FooterStyled>
            <Copyright>&copy; 2025</Copyright>
            <CopyrightText1> Alireza Hamidi</CopyrightText1>
            <CopyrightText2>
                Based on a design of Jonas
            </CopyrightText2>
        </FooterStyled>
    );
}

export default Footer;
