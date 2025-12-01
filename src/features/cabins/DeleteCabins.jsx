import DeleteModal from '../../components/DeleteModal';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import { FaTrashCan } from 'react-icons/fa6';

function DeleteCabins({ onDelete, isDeleting }) {
    return (
        <Modal>
            <Modal.Open opens="delete">
                <FaTrashCan className="icons_trash" />
            </Modal.Open>
            <Modal.Window name="delete">
                <DeleteModal
                    onDelete={onDelete}
                    isDeleting={isDeleting}
                />
            </Modal.Window>
        </Modal>
    );
}

export default DeleteCabins;
