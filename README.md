### mParticle Data Planning sample app
To illustrate the mParticle Data Plan Builder in action within a live website, we’ve implemented the [retail data plan template](https://docs.google.com/spreadsheets/d/1rEOSgNRfV7YRs_xbm2NJ_DEOBPTEJ2RIZRr0Y-TqnK8/) in a sample eCommerce web application. As you explore the [live site](https://dataplanningdemo.gatsbyjs.io/), each time you perform an action resulting in an event being sent to mParticle, you will see the event and attribute names displayed in a pop-up box:
!(https://images.prismic.io/mparticle/8bc1471b-5628-4c98-ad84-35ad5e0474bd_image1.gif)

## Run this app locally
After cloning this repository locally:
1) `cd` into the app directory
2) Run `npm install` to install dependencies
3) Run `gatsby develop` to start the app on `localhost:8000`

## Create your own data plans
The mParticle Data Plan Builder 

## See events in your mParticle Live Stream
_Note: This step is only possible for users with access to an mParticle tenant_
1) In the mParticle Gatsby plugin configuration (located in `gatsby-config.js`), replace the `apiKey` value with the web API for your mParticle workspace. You can find this key under web platform configuration details (click Setup->Inputs->Web).
2) Click through the local build of the application to see eCommerce events coming into the mParticle Live Stream (under Data Master).

## JAMstack ECommerce Professional (Beta)

This sample app was bootstrapped using [JAMstack ECommerce Professional](https://github.com/jamstack-cms/jamstack-ecommerce.git), a fully configurable JAMstack E Commerce site.
