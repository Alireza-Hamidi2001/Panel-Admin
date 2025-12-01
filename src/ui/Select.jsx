import styled from 'styled-components';
import { respond } from '../utils/mixins';

const StyledSelect = styled.select`
    font-size: 1.4rem;
    padding: 0.84rem 0.8rem;
    /* border: 1px solid
    ${(props) =>
        props.type === 'white'
            ? 'var(--color-dark-100)'
            : 'var(--color-dark-300)'}; */
    border: 1px solid var(--color-cream-300);
    border-radius: 4px;
    background-color: var(--color-cream-250);
    font-weight: 500;
    box-shadow: 0 0 0.7rem var(--color-cream-400);
    color: var(--color-dark-300);

    &:focus {
        outline: none;
    }

    ${respond('tab-port')`
        font-size: 1.2rem;
        padding: 0.24rem 0.8rem;
        `}

    ${respond('phone')`
        font-size: 1rem;
        padding: 0.25rem 0.8rem;
    `}
`;

const Option = styled.option`
    color: var() (--color-dark-200);
`;

function Select({ options, onChange, value }) {
    return (
        <StyledSelect value={value} onChange={onChange}>
            {options.map((option) => (
                <Option key={option.value} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </StyledSelect>
    );
}

export default Select;
