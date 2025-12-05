import logo from './../../public/default-user.png';
import nameLogo from './../assets/images/alireza3.png';

import Button from '../ui/Button';
import {
    FirstSpan,
    Form,
    FormRow,
    Img,
    Input,
    LoginLayout,
    P,
    H1,
    SecondSpan,
    ThirdSpan,
    FooterStyled,
    FormRowLogin,
} from './LoginStyles';

// ICONS
import { VscEye } from 'react-icons/vsc';
import { VscEyeClosed } from 'react-icons/vsc';
import { HiOutlineMail } from 'react-icons/hi';
import { FiLock } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';

import Footer from './Footer';
import { useState } from 'react';
import { useLogin } from '../features/authentication/useLogin';

import { LoaderWrapper } from '../features/cabins/CabinTable';
import { PropagateLoader } from 'react-spinners';

function Login() {
    const [email, setEmail] = useState('user@example.com');
    const [password, setPassword] = useState('123456789');
    const { loginFn, isLoading } = useLogin();

    console.log(isLoading);
    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) return;
        loginFn({ email, password });
    }
    if (isLoading)
        return (
            <LoaderWrapper>
                <PropagateLoader size={13} speedMultiplier={2} />
            </LoaderWrapper>
        );
    return (
        <>
            <LoginLayout>
                <FirstSpan></FirstSpan>
                <SecondSpan></SecondSpan>
                <ThirdSpan></ThirdSpan>
                <Form onSubmit={handleSubmit}>
                    <FormRow>
                        <Img src={logo} alt="login default user" />
                        <H1>Welcome</H1>
                    </FormRow>
                    <FormRow>
                        <P>
                            Please login to access cabin bookings,
                            manage cabins, and update system settings
                        </P>
                    </FormRow>
                    <FormRow>
                        <Input
                            type="email"
                            id="email"
                            required
                            placeholder="user@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                        />
                    </FormRow>
                    <FormRow>
                        <Input
                            type="password"
                            id="password"
                            required
                            placeholder="Your password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            disabled={isLoading}
                        />
                    </FormRow>
                    <FormRow>
                        <Button
                            variation="primary"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <PropagateLoader
                                    size={10}
                                    speedMultiplier={2}
                                />
                            ) : (
                                'Login'
                            )}
                        </Button>
                    </FormRow>
                    <FormRowLogin>
                        <Button
                            variation="login"
                            disabled={isLoading}
                        >
                            Login with Google{' '}
                            <FcGoogle className="icons_auth" />
                        </Button>
                        <Button
                            variation="login"
                            disabled={isLoading}
                        >
                            Login with Github{' '}
                            <ImGithub className="icons_auth" />
                        </Button>
                    </FormRowLogin>
                </Form>
                <FooterStyled>
                    <Footer type="login" />
                </FooterStyled>
            </LoginLayout>
        </>
    );
}

export default Login;
