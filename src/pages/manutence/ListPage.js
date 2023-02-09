// project import
import MainCard from 'components/MainCard';
import { Grid, Typography } from '@mui/material';
import OrdersTable from '../dashboard/OrdersTable';

const ListPage = () => (
    <MainCard title="Sample Card">
        <Grid item xs={12} md={7} lg={8}>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Typography variant="h5">Recent Orders</Typography>
                </Grid>
                <Grid item />
            </Grid>
            <MainCard sx={{ mt: 2 }} content={false}>
                <OrdersTable />
            </MainCard>
        </Grid>
    </MainCard>
);

export default ListPage;
