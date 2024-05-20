import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
// import "../styles/dashBoard.css"
 function DashboardScreen() {
  return (
    <div className="dashboard">
      <Typography variant="h4" className="dashboard-header">Dashboard</Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Widget 1" secondary="This is Widget 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Widget 2" secondary="This is Widget 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Widget 3" secondary="This is Widget 3" />
        </ListItem>
      </List>
    </div>
  );
};

export default DashboardScreen;
