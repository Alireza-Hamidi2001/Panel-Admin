import styled from 'styled-components';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';
import { PropagateLoader } from 'react-spinners';
import { useUpdateSetting } from './useUpdateSettings';

function UpdateSettingsForm() {
    const { isPending, settings } = useSettings();
    console.log(settings);

    const LoaderWrapper = styled.div`
        position: fixed; /* تمام صفحه */
        inset: 0; /* top, right, bottom, left = 0 */
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(3rem);
        background-color: rgba(
            0,
            0,
            0,
            0.2
        ); /* اختیاری: کمی پوشش پشت لودر */
        z-index: 9999;
    `;

    const { isUpdating, updateSettings } = useUpdateSetting();

    function handleUpdate(e, field) {
        const { value } = e.target;
        // console.log(value);
        if (!value) return;
        updateSettings({ [field]: value });
    }

    if (isPending)
        return (
            <LoaderWrapper>
                <PropagateLoader size={20} speedMultiplier={2} />
            </LoaderWrapper>
        );
    return (
        <Form>
            <FormRow label="Minimum nights / booking">
                <Input
                    type="number"
                    id="min-nights"
                    defaultValue={settings?.minBookingLength}
                    disabled={isUpdating}
                    onBlur={(e) =>
                        handleUpdate(e, 'minBookingLength')
                    }
                />
            </FormRow>

            <FormRow label="Maximum nights / booking">
                <Input
                    type="number"
                    id="max-nights"
                    defaultValue={settings?.maxBookingLength}
                    disabled={isUpdating}
                    onBlur={(e) =>
                        handleUpdate(e, 'maxBookingLength')
                    }
                />
            </FormRow>

            <FormRow label="Maximum guests / booking">
                <Input
                    type="number"
                    id="max-guests"
                    defaultValue={settings?.maxGuestsPerBookings}
                    disabled={isUpdating}
                    onBlur={(e) =>
                        handleUpdate(e, 'maxGuestsPerBookings')
                    }
                />
            </FormRow>

            <FormRow label="Breakfast price">
                <Input
                    type="number"
                    id="breakfast-price"
                    defaultValue={settings?.breakfastPrice}
                    disabled={isUpdating}
                    onBlur={(e) => handleUpdate(e, 'breakfastPrice')}
                />
            </FormRow>
        </Form>
    );
}

export default UpdateSettingsForm;
