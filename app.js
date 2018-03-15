const express = require('express');

const keys = require('./config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

// Handlebars Middleware chosen for a reason of craft conception and as a relible modern solution
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Index Route
app.get('/', (req, res) => {
	res.render('index', {
		stripePublishableKey: keys.stripePublishableKey
	});
});

// Charge Route
app.post('/charge', (req, res) => {
	const amount = req.body.chargeAmount;
	
	stripe.customers.create({
		email: req.body.stripeEmail,
		source: req.body.stripeToken
	})
	.then(customer => stripe.charges.create({
		amount: amount,
		description: 'Collection Chanel',
		currency: 'eur',
		customer: customer.id
	}))
	.then(charge => res.render('success'));
});

const port = process.env.PORT || 5000;

// Template strings are modern and readable
app.listen(port, () => {
	console.log(`Server runs on port ${port}`);
});
