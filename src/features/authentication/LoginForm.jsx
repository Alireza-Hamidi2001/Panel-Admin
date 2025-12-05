import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';

import { MdEmail } from 'react-icons/md';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {}

    return (
        <Form type="login" onSubmit={handleSubmit}>
            <FormRow type="login" label="Email address">
                <Input
                    type="email"
                    id="email"
                    // This makes this form better for password managers
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormRow>
            <FormRow type="login" label="Password">
                <Input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormRow>
            <FormRow>
                <Button size="large">Login</Button>
            </FormRow>
        </Form>
    );
}

export default LoginForm;
