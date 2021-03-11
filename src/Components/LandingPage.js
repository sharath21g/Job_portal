import React from 'react'
import history from './../history'
import {Button, Container } from '@material-ui/core/'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title} >
              Welcome to the Job Portal
            </Typography>
            <Button variant="contained" color="default" onClick={() => history.push('/SignIn')}> Admin Login </Button>    
          </Toolbar>
        </AppBar>
        <Container className="lander">
          
          <h3> New Applicants pls click the below button to Register </h3>
          
          <Button variant="contained" color="default" onClick={() => history.push('/ApplicantDetails')}>Register Here</Button>
        <br />
        <div class="admin"> 
            
        </div>
        </Container>

    </div>
  );
}


