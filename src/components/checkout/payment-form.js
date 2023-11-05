import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './review';

/* Used and adapted a template from Material UI v4 -> https://v4.mui.com/es/getting-started/templates/ */

//const stripePromise = loadStripe("pk_test_51O9B5oCpzkxzVmTiRjmJBlZoFFvWv3QZC5dDjC6ZuZGNiYU6Pup4NnzTWIc3tTMbs7YkbOmBlhPC0QAemldtt3Ak00VDhj1fHL")

export default function PaymentForm(props) {
  return (
    <React.Fragment>
      <Review myCart={props.myCart} />
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"/>                
          </Grid>
      </Grid>
    </React.Fragment>
  );
}