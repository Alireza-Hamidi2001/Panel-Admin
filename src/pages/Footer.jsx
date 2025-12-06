import styled, { css } from 'styled-components';
import { respond } from '../utils/mixins';

function Footer({ type }) {
    const FooterStyled = styled.footer`
        ${(props) =>
            props.type === 'login' &&
            css`
                position: absolute;
                left: 2rem;
                bottom: 2rem;
            `}

        ${respond('tab-port')`
            padding: 1.5rem
        `}
        ${respond('phone')`
            display:none;

            ${(props) =>
                props.type === 'login' &&
                css`
                    display: block;
                `}
        `}
    `;

    const CopyrightText2 = styled.p`
        font-family: 'open-sans';
        font-style: italic;
        font-size: 1.4rem;
        font-weight: 400;
        color: var(--color-dark-200);

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
        color: var(--color-dark-300);
    `;

    const Copyright = styled.p`
        font-family: 'open-sans';
        color: var(--color-dark-300);
    `;

    return (
        <FooterStyled type={type}>
            <Copyright>&copy; 2025</Copyright>
            <CopyrightText1> Alireza Hamidi</CopyrightText1>
            <CopyrightText2>
                Based on a design of Jonas
            </CopyrightText2>
        </FooterStyled>
    );
}

export default Footer;
