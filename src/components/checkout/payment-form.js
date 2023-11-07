import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@material-ui/core';
import axios from 'axios';

import Review from './review';

/* Used and adapted a template from Material UI v4 -> https://v4.mui.com/es/getting-started/templates/ */

const stripePromise = loadStripe("pk_test_51O9B5oCpzkxzVmTiRjmJBlZoFFvWv3QZC5dDjC6ZuZGNiYU6Pup4NnzTWIc3tTMbs7YkbOmBlhPC0QAemldtt3Ak00VDhj1fHL");

const CheckoutForm = (props) => {

const stripe = useStripe();
const elements = useElements();

  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log("paymentMethod", paymentMethod);
      const { id } = paymentMethod;
      try{
        const { data } = await axios.post("http://localhost:3001/api/checkout", {
          id,
          amount: ((props.myCart.reduce((amount, item) => parseFloat(item.price) + parseFloat(amount), 0)).toFixed(2) * 100)
        }, { withCredentials: true });
        props.updateMessage(data.message);
        elements.getElement(CardElement).clear();
        props.handleNext();
      }
      catch(err){console.log("error from axios", error)}
    }
  }

  return(
    <form onSubmit={handleSubmitPayment}>
      <CardElement />
      <div style={{display: 'flex', justifyContent:'space-between', marginTop:60}}>
        <Button onClick={props.handleBack} >
          BACK
        </Button>
        <Button disabled={false} type='submit' variant='contained' color='primary'>
          PLACE ORDER
        </Button>
      </div>
    </form>
  )
}

export default function PaymentForm(props) {
  return (
    <React.Fragment>
      <Review myCart={props.myCart} />
      <Typography variant="h6" gutterBottom style={{marginTop: 30}}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <CheckoutForm handleBack={props.handleBack} handleNext={props.handleNext} myCart={props.myCart} updateMessage={props.updateMessage} message={props.message}/>
      </Elements>
    </React.Fragment>
  );
}