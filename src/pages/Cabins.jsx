import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';
import AddCabins from '../features/cabins/AddCabins';
import ShowCabins from '../features/cabins/ShowCabins';
import CabinTableOperations from '../features/cabins/CabinTableOperations';

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
                <AddCabins />
                <ShowCabins />
            </Row>
        </>
    );
}

export default Cabins;
