import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';
import { useNavigate } from 'react-router-dom';

import { FaUser } from 'react-icons/fa';

import { CiUser } from 'react-icons/ci';
import Logout from '../features/authentication/Logout';
import UserAvatar from '../features/authentication/UserAvatar';
import DarkModeToggle from './DarkModeToggle';

const StyledHeaderMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: end;
`;
const List = styled.li`
    list-style: none;
`;

function HeaderMenu() {
    const navigate = useNavigate();
    return (
        <StyledHeaderMenu>
            <List>
                <ButtonIcon onClick={() => navigate('/account')}>
                    <FaUser className="icons_user" />
                </ButtonIcon>
            </List>
            <List>
                <Logout />
            </List>
            <List>
                <DarkModeToggle />
            </List>
            <List>
                <UserAvatar />
            </List>
        </StyledHeaderMenu>
    );
}

export default HeaderMenu;
