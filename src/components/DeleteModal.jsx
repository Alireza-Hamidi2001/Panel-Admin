// components/Modal.js
import { FadeLoader, PulseLoader } from 'react-spinners';
import styled from 'styled-components';
import { respond } from '../utils/mixins';

const StyledDiv = styled.div`
    background: var(--color-white);
    padding: 4rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    width: 60%;
    margin: 0 auto;

    ${respond('phone')`
        grid-template-columns: 1fr;
    `}
`;

const H1 = styled.h1`
    color: var(--color-red-200);
    letter-spacing: 0;
    font-style: italic;
    grid-column: 1/-1;
`;

const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-dark-300);
    font-family: 'open-sans';
    grid-column: 1 / span 3;
`;

const Button_Delete = styled.button`
    padding: 1rem 1.2rem;
    font-size: 1.3rem;
    background: var(--color-red-200);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.05);
    }

    ${respond('phone')`
        justify-self: stretch
    `}
`;

export default function DeleteModal({ onDelete, isDeleting }) {
    return (
        <StyledDiv>
            <H1>Delete Cabin</H1>
            <Text>
                Do you really want to delete this room? This action is
                irreversible and all associated data will be
                permanently removed. Please confirm your decision
                before proceeding.
            </Text>
            <Button_Delete onClick={onDelete} disabled={isDeleting}>
                {isDeleting ? (
                    <PulseLoader
                        size={7}
                        speedMultiplier={2}
                        color="white"
                    />
                ) : (
                    'Delete'
                )}
            </Button_Delete>
        </StyledDiv>
    );
}
