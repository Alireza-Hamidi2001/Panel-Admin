import styled from 'styled-components';
import { format, isToday } from 'date-fns';

import Tag from '../../ui/Tag';
import Table from '../../ui/Table';

import { formatCurrency } from '../../utils/helpers';
import { formatDistanceFromNow } from '../../utils/helpers';

const Cabin = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-dark-300);
    font-family: 'KottaOne';
`;

const Stacked = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    & span:first-child {
        font-weight: 500;
        font-size: 1.4rem;
        color: var(--color-dark-300);
    }

    & span:last-child {
        color: var(--color-dark-200);
        font-size: 1.2rem;
      }
      `;

const Amount = styled.div`
    font-family: 'KottaOne';
    font-size: 1.4rem;
    font-weight: 500;
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
        'checked-out': 'silver',
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
                    &rarr; {numNights} night stay
                </span>
                <span>
                    {format(new Date(startDate), 'MMM dd yyyy')}{' '}
                    &mdash; {format(new Date(endDate), 'MMM dd yyyy')}
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
