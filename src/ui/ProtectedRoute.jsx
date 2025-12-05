import { PropagateLoader } from 'react-spinners';
import { useUser } from '../features/authentication/useUser';
import { LoaderWrapper } from '../features/cabins/CabinTable';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    // 1- load the authenticate users
    const { user, isLoading, isAuthenticated } = useUser();

    // 2- if there is no authenticate user redirect to the '/login'
    useEffect(
        function () {
            if (!isAuthenticated && !isLoading) navigate('/login');
        },
        [isAuthenticated, isLoading, navigate]
    );

    // 3- While loading , show a spinner
    if (isLoading)
        return (
            <LoaderWrapper>
                <PropagateLoader size={15} speedMultiplier={2} />
            </LoaderWrapper>
        );

    // 4- if there is authenticate user , render app

    if (isAuthenticated) return children;
}

export default ProtectedRoute;
