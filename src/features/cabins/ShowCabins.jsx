import { SiRevealdotjs } from 'react-icons/si';
import Button from '../../ui/Button';
import CabinTable from './CabinTable';
import Modal from '../../ui/Modal';

function ShowCabins() {
    return (
        <Modal>
            <Modal.Open opens="table">
                <Button variation="primary">
                    <SiRevealdotjs className="icons_showTable" />
                    Show cabins
                </Button>
            </Modal.Open>
            <Modal.Window name="table">
                <CabinTable />
            </Modal.Window>
        </Modal>
    );
}

export default ShowCabins;
