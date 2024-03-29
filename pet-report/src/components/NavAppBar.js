import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import '../App.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: 'rgb(28,28,28)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavAppBar () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Pet Report Pro
          </Typography>
          <a href={'/create-report'}><Button color="inherit">Create A Report</Button></a>
          <a href={'/about'}><Button color="inherit">About</Button></a>
          <a href={'/donate'}><Button color="inherit">Donate</Button></a>
        </Toolbar>
      </AppBar>
    </div>
  );
}