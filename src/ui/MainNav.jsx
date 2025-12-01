import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { GoHome } from 'react-icons/go';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { BsBuildings } from 'react-icons/bs';
import { HiOutlineUsers } from 'react-icons/hi2';
import { TbSettings2 } from 'react-icons/tb';

function MainNav() {
    const NavList = styled.ul`
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        list-style: none;
        margin-top: 4rem;
        margin-bottom: auto;
    `;

    const NavLink_Styled = styled(NavLink)`
        &:link,
        &:visited {
            display: flex;
            align-items: center;
            gap: 1.2rem;

            color: var(--color-font-dark);
            text-decoration: none;
            font-size: 1.6rem;
            font-weight: 500;
            padding: 1.2rem 2.4rem;
            transition: all 0.3s;
        }

        /* This works because react-router places the active class on the active NavLink */
        &:hover,
        &:active,
        &.active:link,
        &.active:visited {
            color: var(--color-cream-500);
            background-color: var(--color-cream-100);
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
                        <GoHome />
                        Home
                    </NavLink_Styled>
                </li>
                <li>
                    <NavLink_Styled to="/bookings">
                        <HiOutlineCalendarDateRange />
                        Bookings
                    </NavLink_Styled>
                </li>
                <li>
                    <NavLink_Styled to="/cabins">
                        <BsBuildings />
                        Cabins
                    </NavLink_Styled>
                </li>
                <li>
                    <NavLink_Styled to="/users">
                        <HiOutlineUsers />
                        Users
                    </NavLink_Styled>
                </li>
                <li>
                    <NavLink_Styled to="/settings">
                        <TbSettings2 />
                        Settings
                    </NavLink_Styled>
                </li>
            </NavList>
        </nav>
    );
}

export default MainNav;
