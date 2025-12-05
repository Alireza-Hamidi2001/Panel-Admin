import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient()

    const { mutate: logoutFn, isLoading } = useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.removeQueries(); // همه کوئری هارو پاک کن چون کش باید پاک بشه ، از لوکال استوریج که پاک بشه از کش هم باید پاک بشه .
            toast.success('Logout successfuly');
            navigate('/login', { replace: true });
        },
    });

    return {logoutFn , isLoading }
}
