import styled from 'styled-components';
import { respond } from '../utils/mixins';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { createPortal } from 'react-dom';
import {
    cloneElement,
    createContext,
    useContext,
    useState,
} from 'react';

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(1rem) brightness(0.2); ;
    box-shadow: 0 0 1rem red;
`;

const StyledModal = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    /* background: var(--color-cream-100); */
    /* box-shadow: 0 0 3rem var(--color-cream-500); */
    padding: 6rem;
    transition: all 0.5s;
    animation: modalShow 0.5s ease-in-out;
    width: 75%;

    ${respond('tab-port')`
        width: 90%;
    `}
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--backdrop-color);
    backdrop-filter: blur(4px);
    z-index: 1000;
    transition: all 0.5s;
`;

const Button = styled.button`
    background: none;
    border: none;
    padding: 0.4rem;
    transform: translateX(1rem);
    transition: all 0.2s;
    position: absolute;
    top: 1.2rem;
    right: 1.9rem;

    &:hover {
        background-color: var(--color-grey-100);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        /* Sometimes we need both */
        /* fill: var(--color-grey-500);
        stroke: var(--color-grey-500); */
        color: var(--color-grey-500);
    }
`;

const ModalContext = createContext();

function Modal({ children }) {
    const [openName, setOpenName] = useState('');
    const close = () => setOpenName('');
    const open = setOpenName;

    return (
        <ModalContext.Provider value={{ openName, close, open }}>
            {children}
        </ModalContext.Provider>
    );
}

function Open({ children, opens: opensWindowName }) {
    const { open } = useContext(ModalContext);

    return cloneElement(children, {
        onClick: () => open(opensWindowName),
    });
}

function Window({ children, name }) {
    const { openName, close } = useContext(ModalContext);

    if (name !== openName) return null;

    return createPortal(
        <ModalContainer>
            <StyledModal>
                <Button onClick={close}>
                    <IoCloseCircleOutline className="icons_close" />
                </Button>
                {cloneElement(children, { onCloseModal: close })}
            </StyledModal>
        </ModalContainer>,
        document.body
    );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
