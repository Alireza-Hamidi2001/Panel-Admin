import styled from 'styled-components';
import nameLogo from './../assets/images/alireza4.png';
import { respond } from '../utils/mixins';

function Logo() {
    const Anchor_Style = styled.a`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        text-decoration: none;
        color: var(--color-cream-400);
        text-transform: uppercase;
        word-spacing: 2px;
        letter-spacing: 1px;
    `;

    const Img = styled.img`
        height: 4.5rem;

        ${respond('tab-port')`
            height: 4rem;
        `}
        ${respond('phone')`
            height: 3.5rem;
        `}
    `;

    return (
        <Anchor_Style
            href="/"
            className="flex items-center gap-4 z-10"
        >
            <Img src={nameLogo} alt="The Wild Oasis logo" />
        </Anchor_Style>
    );
}

export default Logo;
