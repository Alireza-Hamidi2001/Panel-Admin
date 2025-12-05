import { useMutation } from '@tanstack/react-query';
import { login } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
    const navigate = useNavigate();
    const { mutate: loginFn, isLoading } = useMutation({
        mutationFn: ({ email, password }) =>
            login({ email, password }),
        onSuccess: (user) => {
            // console.log(user);
            navigate('/dashboard', { replace: true });
            toast.success('Login successfuly');
        },
        onError: (err) => {
            console.error('ERROR', err);
            toast.error('Email or Password are invalid');
        },
    });
    return { loginFn, isLoading };
}
