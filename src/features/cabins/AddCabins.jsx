import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import CabinTable from './CabinTable';

import { MdAddHomeWork } from 'react-icons/md';
import { SiRevealdotjs } from 'react-icons/si';
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

// function AddCabins() {
//     const [isOpenModal, setIsOpenModal] = useState(false);

//     return (
//         <>
//             <Button
//                 variation="primary"
//                 onClick={() => setIsOpenModal((show) => !show)}
//             >
//                 {isOpenModal ? 'Close' : 'Add Cabin'}
//             </Button>
//             {isOpenModal && (
//                 <ModalNewCabin setIsOpenModal={setIsOpenModal}>
//                     <CreateCabinForm
//                         setIsOpenModal={setIsOpenModal}
//                     />
//                 </ModalNewCabin>
//             )}
//         </>
//     );
// }

// export default AddCabins;
