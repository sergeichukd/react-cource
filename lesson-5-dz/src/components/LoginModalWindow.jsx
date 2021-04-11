import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import LoginForm from './LoginForm.jsx';


const useStyles = makeStyles((theme) => ({
  paper: {
    top: '50%',
    left: '50%',
    position: 'absolute',
    width: 400,
    height: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function LoginModalWindow() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="login-title">
        Log in
      </h2>
      <LoginForm onClose={handleClose}/>
    </div>
  );

  return (
    <div id='log-in'>
      <Button id='log-in-button' variant="outlined" size='small' onClick={handleOpen}>
        Вход
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
