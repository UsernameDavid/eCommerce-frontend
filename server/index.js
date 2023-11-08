const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const stripe = new Stripe('sk_test_51O9B5oCpzkxzVmTimfk5uXPNlspJbcLDZMJ1knjtnao5OLXZXgzGHcGB9WbVym8zq7qSYH5ez5EPk66cpcOxa2AB004rpeYYAa')

const app = express();

app.use(cors());
app.use(express.json())

app.post("/api/checkout", async (req, res) => {
    console.log(req.body);
    const { id, amount } = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "EUR",
            description: "Products in Cart",
            confirm: true,
            payment_method: id,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: 'never',
            },
        })
        console.log(payment)
        return res.status(200).json({message : "Payment Successful"})

    } catch (error) {
        return res.json({message: error.raw.message})
    }
})

app.listen(3001, () => {
    console.log('Server listening port', 3001)
});