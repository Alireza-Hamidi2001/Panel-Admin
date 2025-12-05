import ButtonIcon from '../../ui/ButtonIcon';
import { FiLogOut } from 'react-icons/fi';
import { useLogout } from './useLogout';

function Logout() {
    const { logoutFn, isLoading } = useLogout();
    return (
        <ButtonIcon disabled={isLoading} onClick={logoutFn}>
            {!isLoading ? (
                <FiLogOut className='icons_logout' />
            ) : (
                <LoaderWrapper>
                    <PropagateLoader size={15} speedMultiplier={2} />
                </LoaderWrapper>
            )}
        </ButtonIcon>
    );
}

export default Logout;
