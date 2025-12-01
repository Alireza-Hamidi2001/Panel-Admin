import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';
import AddCabins from '../features/cabins/AddCabins';
import ShowCabins from '../features/cabins/ShowCabins';

function Cabins() {
    // useEffect(function () {
    //     getCabins().then((data) =>
    //         console.log(data)
    //     );
    // }, []);
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>filter / sort</p>
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
