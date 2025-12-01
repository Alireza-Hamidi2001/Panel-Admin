import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { IoDuplicate } from 'react-icons/io5';
import MakeDuplicate from './MakeDuplicate';

function ModalDuplicate({ onDuplicate, isDupliating }) {
    return (
        <Modal>
            <Modal.Open opens="duplicate">
                <IoDuplicate className="icons_duplicate" />
            </Modal.Open>
            <Modal.Window name="duplicate">
                <MakeDuplicate
                    isDupliating={isDupliating}
                    onDuplicate={onDuplicate}
                />
            </Modal.Window>
        </Modal>
    );
}

export default ModalDuplicate;
