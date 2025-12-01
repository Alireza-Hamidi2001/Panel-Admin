import { useState } from 'react';

import {
    deleteCabin,
    duplicateCabin,
} from '../../services/apiCabins';

import { formatCurrency } from '../../utils/helpers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { IoDuplicateOutline } from 'react-icons/io5';
import { FaRegTrashAlt } from 'react-icons/fa';
import DeleteModal from '../../components/DeleteModal';
import {
    Button,
    ButtonsContainer,
    Cabin,
    Capacity,
    Discount,
    Img,
    Price,
    // TableRow,
} from './CabinRow.Styles';
import Modal from '../../ui/Modal';
import { FaTrashCan } from 'react-icons/fa6';
import DeleteCabins from './DeleteCabins';
import ModalDuplicate from '../../components/ModalDuplicate';
import Table from '../../ui/Table';

function CabinRow({ cabin }) {
    const [showConfirm, setShowConfirm] = useState(false);
    const queryClient = useQueryClient();

    // 1. Delete mutate
    const { mutate: deleteMutate, isPending: isDeleting } =
        useMutation({
            mutationFn: (id) => deleteCabin(id),
            onSuccess: () => {
                toast.success('Cabin deleted successfully');
                queryClient.invalidateQueries({
                    queryKey: ['cabins'],
                });
            },
            onError: (err) => toast.error(err.message),
        });
    // console.log(isDeleting);

    // 2. Duplicate mutate
    const { mutate: duplicateMutate, isPending: isDupliating } =
        useMutation({
            mutationFn: (newCabin) => duplicateCabin(newCabin),
            onSuccess: () => {
                toast.success('Cabin duplicated successfully');
                queryClient.invalidateQueries({
                    queryKey: ['cabins'],
                });
            },
            onError: (err) => toast.error(err.message),
        });

    function handleDuplicate() {
        duplicateMutate({
            name: `Copy of ${name}`,
            maxCapacity,
            regularPrice,
            discount,
            image,
            description,
        });
        console.log('Duplicate Clicked');
    }

    const {
        id: cabinID,
        image,
        discount,
        name,
        maxCapacity,
        regularPrice,
        description,
    } = cabin;
    // console.log(cabin);

    function handleDelete() {
        deleteMutate(cabinID);
    }

    const finalPrice = regularPrice - discount;

    return (
        <>
            <Table.Row>
                <Img src={image} />
                <Cabin>{name}</Cabin>
                <Capacity>Fits up to {maxCapacity} guests</Capacity>
                <Price>{formatCurrency(regularPrice)}</Price>
                <Discount>
                    {discount !== 0 ? (
                        <>
                            <p>{formatCurrency(regularPrice)}</p>
                            <p>{formatCurrency(finalPrice)}</p>
                        </>
                    ) : (
                        <p>&#8212;</p>
                    )}
                </Discount>
                <ButtonsContainer>
                    <DeleteCabins
                        onDelete={handleDelete}
                        isDeleting={isDeleting}
                    />
                    <ModalDuplicate
                        setShowConfirm={setShowConfirm}
                        onDuplicate={handleDuplicate}
                        isDupliating={isDupliating}
                    />
                </ButtonsContainer>
            </Table.Row>
        </>
    );
}

export default CabinRow;
