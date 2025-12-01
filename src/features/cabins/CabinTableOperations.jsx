import Filter from '../../ui/Filter';
import TableOperations from '../../ui/TableOperations';

function CabinTableOperations() {
    return (
        <TableOperations>
            <Filter
                filterField="discount"
                options={[
                    { value: 'all', label: 'All' },
                    {
                        value: 'no-discount',
                        label: 'Without discount',
                    },
                    {
                        value: 'with-discount',
                        label: 'With discount',
                    },
                ]}
            />
        </TableOperations>
    );
}

export default CabinTableOperations;
