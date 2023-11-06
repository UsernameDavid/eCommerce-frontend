const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();

const corsOptions ={
    origin:'http://localhost:8000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json())

app.post("/api/checkout", async (req, res) => {
    console.log(req.body);
    res.send('received')
})

app.listen(3001, () => {
    console.log('Server listening port', 3001)
});