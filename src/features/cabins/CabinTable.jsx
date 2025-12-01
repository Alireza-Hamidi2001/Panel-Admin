import { PropagateLoader } from 'react-spinners';
import styled from 'styled-components';

import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';
import CabinRow from './CabinRow';
import Table from '../../ui/Table';
import { useSearchParams } from 'react-router-dom';

const LoaderWrapper = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(3rem);
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 9999;
`;

function CabinTable() {
    const [searchParams] = useSearchParams();
    const {
        data: cabins,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['cabins'],
        queryFn: getCabins,
    });
    // console.log(cabins);

    // -Note-     *******   1- FILTER
    const filterValue = searchParams.get('discount') || 'all';
    // console.log(filterValue);

    let filteredCabins;

    if (filterValue === 'all') filteredCabins = cabins;
    if (filterValue === 'with-discount')
        filteredCabins = cabins?.filter(
            (cabin) => cabin.discount > 0
        );
    if (filterValue === 'no-discount')
        filteredCabins = cabins?.filter(
            (cabin) => cabin.discount === 0
        );

    // -Note-     *******   2- SORT
    const sortBy = searchParams.get('sortBy') || 'startDate-asc';
    const [field, direction] = sortBy.split('-');
    const modifier = direction === 'asc' ? 1 : -1;
    const sortedCabins = filteredCabins.sort(
        (a, b) => (a[field] - b[field]) * modifier
    );

    if (isLoading)
        return (
            <LoaderWrapper>
                <PropagateLoader size={20} speedMultiplier={2} />
            </LoaderWrapper>
        );

    return (
        <Table columns="1fr 1fr 2fr 1fr 1fr 1fr">
            <Table.Header role="row">
                <div>Image</div>
                <div>Cabin</div>
                <div>Capacity</div>
                <div>Price</div>
                <div>Discount</div>
                <div>Controls</div>
            </Table.Header>
            <Table.Body
                // data={cabins}
                // data={filteredCabins}
                data={sortedCabins}
                render={(cabin) => (
                    <CabinRow cabin={cabin} key={cabin.id} />
                )}
            ></Table.Body>
        </Table>
    );
}

export default CabinTable;
