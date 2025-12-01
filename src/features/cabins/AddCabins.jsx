import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';

import { MdAddHomeWork } from 'react-icons/md';
import Modal from '../../ui/Modal';

function AddCabins() {
    return (
        <Modal>
            <Modal.Open opens="cabin-form">
                <Button variation="primary">
                    <MdAddHomeWork className="icons_addCabin" />
                    New Cabin
                </Button>
            </Modal.Open>
            <Modal.Window name="cabin-form">
                <CreateCabinForm />
            </Modal.Window>
        </Modal>
    );
}

export default AddCabins;