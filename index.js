const connectToMongo = require('./config');
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const auth = require('./routes/auth');
const cart = require('./routes/cart')
const wishlist = require('./routes/wishlist')
const product = require('./routes/product')
const review = require('./routes/review')
const paymentRoute = require('./routes/paymentRoute')
connectToMongo();

const port = 5000

const app = express()

// create application/json parser
app.use(bodyParser.json())
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }))



app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));


// Available Routes
app.use('/api/auth', auth)

app.use('/api/product', product)

app.use('/api/cart', cart)

app.use('/api/wishlist', wishlist)

app.use('/api/review', review)

// payment route
app.use('/api', paymentRoute)


app.listen(port, () => {
    console.log(`E-commerce backend listening at http://localhost:${port}`)
})
