import styled from 'styled-components';
import Button from '../ui/Button';
import { PulseLoader } from 'react-spinners';

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
    letter-spacing: 1.2px;
    font-family: 'StoryScript';
`;

const ButtonContainer = styled.button`
    border: none;
`;

const Button_Delete = styled.button`
    padding: 0.5rem 2rem;
    font-size: 1.6rem;
    background: var(--color-primary-200);
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

function MakeDuplicate({ onDuplicate, isDupliating, closeModal }) {

    function handleClick() {
        onDuplicate(closeModal);
    }
    
    return (
        <StyledDiv>
            <Text>Make a Copy of this Cabin?</Text>
            <ButtonContainer>
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
            </ButtonContainer>
        </StyledDiv>
    );
}

export default MakeDuplicate;
