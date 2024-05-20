import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid } from "@mui/material";
import { Doughnut } from 'react-chartjs-2';
import '../styles/adminPage.css'; // Import CSS file for styling

const AdminPage = () => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  
  const chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };
  
  return (
    <div className="admin-page">
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Typography variant="h6">Admin Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <main className="content">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={3}>
              {/* Sidebar */}
              <div className="sidebar">
                {/* <DashboardScreen /> */}
              </div>
            </Grid>
            <Grid item xs={9}>
              {/* Main content */}
              <div className="main-content">
                <Typography variant="h4">Main Content</Typography>
                <Doughnut data={chartData} options={chartOptions} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default AdminPage;
