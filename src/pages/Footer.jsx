import styled from 'styled-components';

function Footer() {
    const FooterStyled = styled.footer`
        margin-top: auto;
    `;

    const CopyrightText2 = styled.p`
        font-family: 'KottaOne';
        font-size: 1.4rem;
        font-weight: 400;
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
            <CopyrightText2>Based on a design of Jonas</CopyrightText2>
        </FooterStyled>
    );
}

export default Footer;
