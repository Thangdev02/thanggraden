import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAgree = () => {
    navigate('/duongdan1');
    setOpen(false); // Close the dialog
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
       <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ // Style override for the button
          backgroundColor: '#173F2A', // Background color green
          color: 'white', // Text color white
          '&:hover': { // Style on hover
            backgroundColor: '#1f5d3c', // Background color dark green
          },
        }}
      >
        Add to cart
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Buy Successfully! Do you want to navigate to Home?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
