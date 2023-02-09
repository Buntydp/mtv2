import { Navigate, Link } from 'react-router-dom';
// material
import { Button, Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  if (true) {
    const token = localStorage.getItem('token');
    if (token == null) {
      return <Navigate to="/login" />;
    }
  }
  return (
    <Page title="Home | MTV">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <div
            style={{
              height: '90px',
              // width: '200px',
              background: 'linear-gradient(to left, #00ab55, #f9fafb)',
              backgroundColor: 'orange'
            }}
          >
            <Typography
              padding={2}
              variant="h3"
              align="right"
              color="#f9fafb"
              style={{ fontStyle: 'italic', fontWeight: 'bold', verticalAlign: 'middle' }}
            >
              You deserve a job that loves you back !
            </Typography>
          </div>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid> */}
        </Grid>
        <br />
        <center>
          <Button component={Link} to="/dashboard/vrudit" variant="contained">
            Know your predicted salary
          </Button>
        </center>
      </Container>
    </Page>
  );
}
