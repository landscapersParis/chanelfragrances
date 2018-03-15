ChanelFragrance is a dedicated answer to a test proposed by KarismatiK.

The Term refactoring was taken in connsideration even if we used different Node solutions from the original test
Proposing a different architecture is chosen to follow the guidline and consider different advices
from communities ahead.

stripe has been chosen instead of a core cart philosophy, to offer a more complete test and production possible build environments, to be put togeather in less time, for a very efficient freeware GUI that brings scalable customers datas.
The suggestion is from e-commerce research-development context on behalf of landscapersParis start up growth. It is to follow schools teaching technologies of the kind.

Local Developpment can be tested with json server in the console

JS is coded according to the latest syntax and philosophies.
Handlebars is used to render the dom and interact with the payment detailed interfaces

Stripe also provides a secure maner to deploy .gitignoring some secret key file going through the API once deployed
To test in developpment environment after cloning the sources, the config/keys_dev.js must be created so the payment form can redirect to /charge page
An account is also to be created unless one already exists and displays the publishable and secret
like follows:

module.exports = {
	stripePublishableKey: 'pk_test_API STRIPE SECTION AVAILABLE',
	stripeSecretKey: 'sk_test_API STRIPE SECTION AVAILABLE'
}

A simple Bootstrap version is available from main.handlebars for a very minimmised design

A graphql and graphiql installation has been taken in consideration for SEO but was ignored, Stripe handling enough datas for the test and moke architcture.

The package is very easy to push to heroku for a moke app, but was only stored up github as it has been asked.

scripts are added for nodemon and json server to run

The App here is to be more readable in general and that doesn't make it les relible or secure. The approach is also to show responsive design skills gap
A more elaborate design is archived with flux box css frame or semantic-ui possible.
