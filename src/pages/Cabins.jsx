import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';
import AddCabins from '../features/cabins/AddCabins';
import ShowCabins from '../features/cabins/ShowCabins';
import CabinTableOperations from '../features/cabins/CabinTableOperations';
import styled from 'styled-components';

const CabinsButtonContainer = styled.div`
    display: flex;
    column-gap: 2rem;
`;

function Cabins() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
            </Row>
            <Row type="filter">
                <CabinTableOperations />
            </Row>
            <Row type="vertical">
                <CabinTable />
                <CabinsButtonContainer>
                    <AddCabins />
                    <ShowCabins />
                </CabinsButtonContainer>
            </Row>
        </>
    );
}

export default Cabins;
