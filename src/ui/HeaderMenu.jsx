import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';


import { CiUser } from 'react-icons/ci';

const StyledHeaderMenu = styled.ul`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`;
const List = styled.li`
list-style: none;
`

function HeaderMenu() {
    const navigate = useNavigate();
    return (
        <StyledHeaderMenu>
            <List>
                <ButtonIcon onClick={() => navigate('/account')}>
                    <CiUser />
                </ButtonIcon>
            </List>
            <List>
                <FiLogOut />
            </List>
            {/* <li><LogOut /></li> */}
        </StyledHeaderMenu>
    );
}

export default HeaderMenu;
