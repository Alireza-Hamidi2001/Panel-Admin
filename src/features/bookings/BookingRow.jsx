import styled from 'styled-components';
import { format, isToday } from 'date-fns';

import Tag from '../../ui/Tag';
import Table from '../../ui/Table';

import { formatCurrency } from '../../utils/helpers';
import { formatDistanceFromNow } from '../../utils/helpers';
import { respond } from '../../utils/mixins';

const Cabin = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-dark-300);
    font-family: 'KottaOne';

    ${respond('tab-port')`
        font-size: var(--font-tab);
    `}
    ${respond('phone')`
        font-size: var(--font-mobile);
    `}
`;

const Stacked = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    & span:first-child {
        font-weight: 500;
        font-size: 1.4rem;
        color: var(--color-dark-300);

        ${respond('tab-port')`
            font-size: 0.8rem;
        `}
    }

    & span:last-child {
        color: var(--color-dark-200);
        font-size: 1.2rem;

        ${respond('tab-port')`
            font-size: 0.5rem;
        `}
    }
`;

const Amount = styled.div`
    font-family: 'KottaOne';
    font-size: 1.4rem;
    font-weight: 500;

    ${respond('tab-port')`
        font-size: var(--font-mobile);
    `}
    ${respond('phone')`
        font-size: 0.8rem;
    `}
`;

function BookingRow({
    booking: {
        id: bookingId,
        created_at,
        startDate,
        endDate,
        numNights,
        numGuests,
        totalPrice,
        status,
        guests: { fullName: guestName, email },
        cabins: { name: cabinName },
    },
}) {
    const statusToTagName = {
        unconfirmed: 'blue',
        'checked-in': 'green',
        'checked-out': 'red',
    };

    return (
        <Table.Row>
            <Cabin>{cabinName}</Cabin>

            <Stacked>
                <span>{guestName}</span>
                <span>{email}</span>
            </Stacked>

            <Stacked>
                <span>
                    {isToday(new Date(startDate))
                        ? 'Today'
                        : formatDistanceFromNow(startDate)}{' '}
                    <br />
                    {numNights} night stay
                </span>
                <span>
                    {format(new Date(startDate), 'MMM dd yyyy')}{' '}
                    <br /> {format(new Date(endDate), 'MMM dd yyyy')}
                </span>
            </Stacked>

            <Tag type={statusToTagName[status]}>
                {status.replace('-', ' ')}
            </Tag>

            <Amount>{formatCurrency(totalPrice)}</Amount>
        </Table.Row>
    );
}

export default BookingRow;
