import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './address-form';
import PaymentForm from './payment-form';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { HomeRounded } from '@material-ui/icons';
import Confirmation from './confirmation';


/* Used and adapted a template from Material UI v4 -> https://v4.mui.com/es/getting-started/templates/ */


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        David Fernández @ Devcamp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping details', 'Review & Payment', 'Confirmation'];

function getStepContent(step, myCart, handleBack, handleNext, message, updateMessage, emptyCart) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm myCart={myCart} handleBack={handleBack} handleNext={handleNext} updateMessage={updateMessage} message={message}/>;
    case 2:
      return <Confirmation message={message} emptyCart={emptyCart} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [message, setMessage] = React.useState("");

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const updateMessage = message => {
    setMessage(message);
  };

  return (
    <React.Fragment>

      <CssBaseline />

      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Easy Online Shopping - Check Out
          </Typography>
          <NavLink exact to="/">
            <IconButton aria-label='home'>
              <HomeRounded fontSize='large' />
            </IconButton>
          </NavLink>
        </Toolbar>
      </AppBar>

      <main className={classes.layout}>

        <Paper className={classes.paper}>

          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>

          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <React.Fragment>

            {activeStep === 999 ? (
            null
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, props.myCart, handleBack, handleNext, message, updateMessage, props.emptyCart)}
                <div className={classes.buttons}>
                  {
                    activeStep === 0 ?
                      (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}>
                          NEXT
                        </Button>
                      )
                      :
                      //Step 1 Button's are managed inside PaymentForm component
                      activeStep === 2 ?
                        <NavLink exact to="/" onClick={props.emptyCart}>
                          <Button 
                            variant="contained"
                            color="primary"
                            className={classes.button}>
                            OK
                          </Button>
                        </NavLink>
                        :
                        null
                  }

                </div>
              </React.Fragment>
            )}
          </React.Fragment>

        </Paper>

        <Copyright />

      </main>

    </React.Fragment>
  );
}