import styled from 'styled-components';
import { format, isToday } from 'date-fns';

import Tag from '../../ui/Tag';
import Table from '../../ui/Table';

import { formatCurrency } from '../../utils/helpers';
import { formatDistanceFromNow } from '../../utils/helpers';
import { respond } from '../../utils/mixins';

// ICONS
import { IoMdPricetags } from 'react-icons/io';
import { FaUser } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { IoTimerSharp } from 'react-icons/io5';

import {
    Amount,
    Cabin,
    StackedOne,
    StackedTwo,
} from './BookingRowStyles';
import { BsCalendarDate } from 'react-icons/bs';

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
        guests: { fullName: guestName = '', email },
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

            <StackedOne>
                <span>
                    <FaUser className="icons_booking" />
                    {guestName}
                </span>
                <span>
                    <MdEmail className="icons_booking" />
                    {email}
                </span>
            </StackedOne>

            <StackedTwo>
                <span>
                    <p>
                        <IoTimerSharp className="icons_booking" />
                        {isToday(new Date(startDate))
                            ? 'Today'
                            : formatDistanceFromNow(startDate)}{' '}
                    </p>
                    <p>{numNights} night stay</p>
                </span>
                <span>
                    <BsCalendarDate className="icons_booking" />
                    {format(new Date(startDate), 'MMM dd yyyy')}
                    &mdash;
                    {format(new Date(endDate), 'MMM dd yyyy')}
                </span>
            </StackedTwo>

            <Tag type={statusToTagName[status]}>
                <p>{status.replace('-', ' ')}</p>
            </Tag>

            <Amount>
                <IoMdPricetags className="icons_booking" />
                {formatCurrency(totalPrice)}
            </Amount>
        </Table.Row>
    );
}

export default BookingRow;
