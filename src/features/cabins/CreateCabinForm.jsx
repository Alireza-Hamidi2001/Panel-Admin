import styled from 'styled-components';

import { PropagateLoader, PulseLoader } from 'react-spinners';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import { createCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

// ICONS
import { CgRename } from 'react-icons/cg';
import { BsPeople } from 'react-icons/bs';
import { IoPricetagsOutline } from 'react-icons/io5';
import { RiDiscountPercentLine } from 'react-icons/ri';
import { TbFileDescription } from 'react-icons/tb';
import { IoIosImages } from 'react-icons/io';

const FormRow = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 24rem 1fr 1.2fr;
    gap: 2.4rem;

    padding: 1.2rem 0;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }

    &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
    }
`;

const Label = styled.label`
    font-size: 1.6rem;
    font-family: 'StoryScript';
    word-spacing: 4px;
    letter-spacing: 1px;
    color: var(--color-font-dark);
`;

const Error = styled.div`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;

function CreateCabinForm({ setIsOpenModal }) {
    const queryClient = useQueryClient();

    const { register, handleSubmit, reset, getValues, formState } =
        useForm();

    console.log(formState);

    const { isPending: isCreating, mutate } = useMutation({
        mutationFn: (newCabin) => createCabin(newCabin),
        onSuccess: () => {
            toast.success('Cabin created successfully');
            queryClient.invalidateQueries({
                queryKey: ['cabins'],
            });
            cancelButton();
            reset();
        },
        onError: (err) => toast.error(err.message),
    });
    function onSubmit(data) {
        console.log(data);
        mutate({ ...data, image: data.image[0] });
        // setShowAddForm((prev) => !prev);
    }

    function onError(errors) {
        // console.log(errors);
        const firstError = Object.values(errors)[0];
        toast.error(firstError.message);
    }

    function cancelButton() {
        setIsOpenModal?.(false);
        reset();
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormRow>
                <div className="demo">
                    <CgRename className="icons_create-cabin" />
                    <Label htmlFor="name">Cabin name</Label>
                </div>
                <Input
                    placeholder="Ali"
                    disabled={isCreating}
                    type="text"
                    id="name"
                    {...register('name', {
                        required: 'Name is required',
                        minLength: {
                            value: 3,
                            message:
                                'Name should has at least 3 letter',
                        },
                    })}
                />
                {/* {errors?.name?.message} */}
            </FormRow>

            <FormRow>
                <div className="demo">
                    <BsPeople className="icons_create-cabin" />
                    <Label htmlFor="maxCapacity">
                        Maximum capacity
                    </Label>
                </div>
                <Input
                    placeholder="like 4"
                    disabled={isCreating}
                    type="number"
                    id="maxCapacity"
                    {...register('maxCapacity', {
                        required: 'Capacity is required',
                        min: {
                            value: 1,
                            message: 'Capacity should be at least 1',
                        },
                    })}
                />
            </FormRow>

            <FormRow>
                <div className="demo">
                    <IoPricetagsOutline className="icons_create-cabin" />
                    <Label htmlFor="regularPrice">
                        Regular price
                    </Label>
                </div>
                <Input
                    placeholder="like 250"
                    disabled={isCreating}
                    type="number"
                    id="regularPrice"
                    {...register('regularPrice', {
                        required: 'Price field is required',
                    })}
                />
            </FormRow>

            <FormRow>
                <div className="demo">
                    <RiDiscountPercentLine className="icons_create-cabin" />
                    <Label htmlFor="discount">Discount</Label>
                </div>
                <Input
                    type="number"
                    disabled={isCreating}
                    id="discount"
                    defaultValue={0}
                    {...register('discount', {
                        required: 'Discount field is required',
                        validate: (value) =>
                            +value <= +getValues().regularPrice ||
                            'Discount should be less than regularPrice.',
                    })}
                />
            </FormRow>

            <FormRow>
                <div className="demo">
                    <TbFileDescription className="icons_create-cabin" />
                    <Label htmlFor="description">
                        Description for website
                    </Label>
                </div>
                <Textarea
                    placeholder="write a short description for this cabin"
                    disabled={isCreating}
                    type="number"
                    id="description"
                    defaultValue=""
                    {...register('description', {
                        required: 'Description field is required',
                    })}
                />
            </FormRow>

            <FormRow>
                <div className="demo">
                    <IoIosImages className="icons_create-cabin" />
                    <Label htmlFor="image">Cabin photo</Label>
                </div>
                <FileInput
                    id="image"
                    disabled={isCreating}
                    type="file"
                    accept="image/*"
                    {...register('image', {
                        required: 'Image is required',
                    })}
                />
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button
                    disabled={isCreating}
                    variation="secondary"
                    onClick={cancelButton}
                >
                    Cancel
                </Button>
                <Button variation="primary" disabled={isCreating}>
                    {isCreating ? (
                        <PulseLoader
                            speedMultiplier={1}
                            size={7}
                            color="#fff"
                        />
                    ) : (
                        'Create Cabin'
                    )}
                </Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;
