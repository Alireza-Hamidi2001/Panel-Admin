import styled from 'styled-components';
import Button from '../ui/Button';
import { PulseLoader } from 'react-spinners';

import { IoWarningOutline } from 'react-icons/io5';
import { respond } from '../utils/mixins';

const StyledDiv = styled.div`
    background: var(--color-white);
    padding: 4rem;

    display: grid;
    grid-template-columns: 1fr auto;
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
    color: var(--color-primary-100);
    letter-spacing: 0;
    font-style: italic;
`;

const Text = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-font-dark);
    font-family: 'open-sans';

    display: flex;
    align-items: center;
    gap: 1rem;

    margin-top: 2rem;
`;

const ButtonContainer = styled.button`
    border: none;
`;

const Button_Delete = styled.button`
    padding: 1rem 1.2rem;
    font-size: 1.3rem;
    background: var(--color-primary-100);
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

function MakeDuplicate({ onDuplicate, isDupliating, closeModal }) {
    function handleClick() {
        onDuplicate(closeModal);
    }

    return (
        <StyledDiv>
            <div>
                <H1>Dupliacte Cabin</H1>
                <Text>
                    Are you sure you want to duplicate this cabin? A
                    new cabin will be created using the same details
                    as the original
                </Text>
            </div>
            <Button_Delete
                disabled={isDupliating}
                onClick={handleClick}
                variation="primary"
            >
                {isDupliating ? (
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

export default MakeDuplicate;
