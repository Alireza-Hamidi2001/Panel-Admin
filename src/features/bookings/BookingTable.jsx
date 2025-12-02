import BookingRow from './BookingRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import { useBookings } from './useBookings';
import { PropagateLoader } from 'react-spinners';
import { LoaderWrapper } from '../cabins/CabinTable';

function BookingTable() {
    // const bookings = [];
    const { bookings, isLoading } = useBookings();

    if (isLoading)
        return (
            <LoaderWrapper>
                <PropagateLoader size={13} speedMultiplier={2} />
            </LoaderWrapper>
        );

    if (!bookings.length) return <Empty resource="bookings" />;

    return (
        <Menus>
            {/* <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr auto"> */}
            <Table columns="1fr 2fr 2fr 1.8fr 1fr 1fr">
                <Table.Header>
                    <div>Cabin</div>
                    <div>Guest</div>
                    <div>Dates</div>
                    <div>Status</div>
                    <div>Amount</div>
                    <div>Controls</div>
                </Table.Header>

                <Table.Body
                    data={bookings}
                    render={(booking) => (
                        <BookingRow
                            key={booking.id}
                            booking={booking}
                        />
                    )}
                />
            </Table>
        </Menus>
    );
}

export default BookingTable;
