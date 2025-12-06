import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

// ICONS
import { BsFillInfoCircleFill } from 'react-icons/bs';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
    const { register, formState } = useForm();
    const { errors } = formState;

    return (
        <Form type="signup">
            <FormRow type="signup" label="Full name" error={''}>
                <Input
                    type="text"
                    id="fullName"
                    placeholder="Your Fullname"
                />
            </FormRow>

            <FormRow type="signup" label="Email address" error={''}>
                <Input
                    type="email"
                    id="email"
                    placeholder="user@example.com"
                />
            </FormRow>

            <FormRow
                type="signup"
                label="Password (min 8 characters)"
                error={''}
            >
                <Input
                    type="password"
                    id="password"
                    placeholder="Enter 8 characters"
                />
            </FormRow>

            <FormRow type="signup" label="Repeat password" error={''}>
                <Input
                    type="password"
                    id="passwordConfirm"
                    placeholder="Enter your password again"
                />
            </FormRow>

            <FormRow type="signup">
                {/* type is an HTML attribute! */}
                <Button variation="secondary" type="reset">
                    Cancel
                </Button>
                <Button variation='primary'>Create new user</Button>
            </FormRow>
        </Form>
    );
}

export default SignupForm;
