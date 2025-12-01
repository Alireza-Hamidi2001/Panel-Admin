import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { respond } from '../utils/mixins';

const StyledFilter = styled.div`
    border: 1px solid var(--color-cream-300);
    background-color: var(--color-cream-250);
    box-shadow: var(--shadow-sm);
    border-radius: 4px;
    padding: 0.4rem;
    display: flex;
    gap: 0.8rem;

    ${respond('tab-port')`
        gap: 0.4rem;
            `}
`;

const FilterButton = styled.button`
    background-color: var(--color-cream-250);
    color: var(--color-dark-300);
    border: none;
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: capitalize;

    ${(props) =>
        props.active &&
        css`
            background-color: var(--color-cream-400);
            color: var(--color-light-100);
            font-style: italic;
        `}

    border-radius: 4px;
    font-weight: 500;
    font-size: 1.4rem;
    /* To give the same height as select */
    padding: 0.44rem 0.8rem;
    transition: all 0.3s;

    ${respond('tab-port')`
            font-size: 1.2rem;
            `}

    ${respond('phone')`
            font-size: 1rem;
            `}

    &:hover:not(:disabled) {
        background-color: var(--color-cream-400);
        color: var(--color-light-100);
    }
`;

function Filter({ filterField, options }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentFilterButton =
        searchParams.get(filterField) || options.at(0).value;

    function handleClick(value) {
        searchParams.set(filterField, value);
        setSearchParams(searchParams);
    }

    return (
        <StyledFilter>
            {options.map((option) => (
                <FilterButton
                    key={option.value}
                    onClick={() => handleClick(option.value)}
                    active={option.value === currentFilterButton}
                >
                    {option.label}
                </FilterButton>
            ))}
        </StyledFilter>
    );
}

export default Filter;
