import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { GoHome } from 'react-icons/go';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { BsBuildings } from 'react-icons/bs';
import { HiOutlineUsers } from 'react-icons/hi2';
import { TbSettings2 } from 'react-icons/tb';
import { respond } from '../utils/mixins';
import Uploader from '../data/Uploader';

function MainNav() {
    const NavList = styled.ul`
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        list-style: none;
        margin-top: 4rem;
        margin-bottom: auto;
    `;
    const NavLink_text = styled.p`
        display: block;
        padding: 0;

        ${respond('phone')`
            display:none;
        `}
    `;
    const NavLink_Styled = styled(NavLink)`
        &:link,
        &:visited {
            display: flex;
            align-items: center;
            gap: 1.2rem;

            color: var(--color-font-light);
            text-decoration: none;
            font-size: 1.6rem;
            font-weight: 500;
            padding: 1.2rem 0rem;
            transition: all 0.3s;

            ${respond('phone')`
            gap: 0;
            padding: 1.2rem 1rem;
            justify-content: center;
`}
        }

        /* This works because react-router places the active class on the active NavLink */
        &:hover,
        &:active,
        &.active:link,
        &.active:visited {
            color: var(--color-light);
            background-color: var(--color-main-light);
            border-left: 5px solid var(--color-main-dark);

            ${respond('phone')`
                border-left: none;
            `}
        }

        & svg {
            width: 2.4rem;
            height: 2.4rem;
            color: var(--color-grey-400);
            transition: all 0.3s;
        }

        &:hover svg,
        &:active svg,
        &.active:link svg,
        &.active:visited svg {
            color: var(--color-brand-600);
        }
    `;

    return (
        <nav>
            <NavList>
                <li>
                    <NavLink_Styled to="/dashboard">
                        <GoHome className="icons_sidebar" />
                        <NavLink_text>Home</NavLink_text>
                    </NavLink_Styled>
                </li>
                <li>
                    <NavLink_Styled to="/bookings">
                        <HiOutlineCalendarDateRange className="icons_sidebar" />
                        <NavLink_text>Bookings</NavLink_text>
                    </NavLink_Styled>
                </li>
                <li>
                    <NavLink_Styled to="/cabins">
                        <BsBuildings className="icons_sidebar" />
                        <NavLink_text>Cabins</NavLink_text>
                    </NavLink_Styled>
                </li>
                <li>
                    <NavLink_Styled to="/users">
                        <HiOutlineUsers className="icons_sidebar" />
                        <NavLink_text>Users</NavLink_text>
                    </NavLink_Styled>
                </li>
                <li>
                    <NavLink_Styled to="/settings">
                        <TbSettings2 className="icons_sidebar" />
                        <NavLink_text>Settings</NavLink_text>
                    </NavLink_Styled>
                </li>
            </NavList>
            {/* <Uploader /> */}
        </nav>
    );
}

export default MainNav;
