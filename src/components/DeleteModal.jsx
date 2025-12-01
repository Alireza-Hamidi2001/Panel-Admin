// components/Modal.js
import { FadeLoader, PulseLoader } from 'react-spinners';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border: 1px solid var(--color-cream-300);
    padding: 2rem 4rem;
    display: flex;
    align-items: center;
    gap: 2rem;
`;

const Text = styled.p`
    font-size: 2rem;
    font-weight: 500;
    color: var(--color-font-dark);
    letter-spacing: 1px;
    font-family: 'StoryScript';
`;

const Button_Delete = styled.button`
    padding: 0.5rem 2rem;
    font-size: 1.6rem;
    background: var(--color-red-200);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s;
    width: 7rem;

    &:hover {
        transform: scale(1.05);
    }
`;

export default function DeleteModal({ onDelete, isDeleting }) {
    return (
        <StyledDiv>
            <Text>This cabin will be permanently deleted.</Text>
            <Button_Delete onClick={onDelete} disabled={isDeleting}>
                {isDeleting ? (
                    <PulseLoader
                        size={7}
                        speedMultiplier={2}
                        color="white"
                    />
                ) : (
                    'Confirm'
                )}
            </Button_Delete>
        </StyledDiv>
    );
}
