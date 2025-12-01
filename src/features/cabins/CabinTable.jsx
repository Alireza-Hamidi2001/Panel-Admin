import { PropagateLoader } from 'react-spinners';
import styled from 'styled-components';

import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';
import CabinRow from './CabinRow';
import { respond } from '../../utils/mixins';
import Table from '../../ui/Table';

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

const TableHeader = styled.header`
    display: grid;
    /* grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr; */
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr 1fr;
    column-gap: 2.4rem;
    align-items: center;

    font-size: 1rem;

    background-color: var(--color-grey-50);
    border-bottom: 1px solid var(--color-grey-100);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: var(--color-grey-600);
    padding: 1.6rem 2.4rem;
    text-align: center;
    background: var(--color-cream-150);

    ${respond('tab-port')`
        column-gap: 1.2rem;
    `}
    ${respond('phone')`
        column-gap: 0.6rem;
        font-size: 0.8rem;

    `}
`;

function CabinTable() {
    const {
        data: cabins,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['cabins'],
        queryFn: getCabins,
    });
    // console.log(cabins);

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
                data={cabins}
                render={(cabin) => (
                    <CabinRow cabin={cabin} key={cabin.id} />
                )}
            ></Table.Body>
        </Table>
    );
}

export default CabinTable;
