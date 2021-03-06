module.exports = {
  siteMetadata: {
    title: `Gatsby JAMstack ECommerce Professional`,
    description: `Get up and running with your next E Commerce Website.`,
    author: `@dabit3`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/baseLayout.js`),
      },
    },
    `gatsby-plugin-stripe`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Eina, Eina-SemiBold"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: '@slixites/gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Montserrat',
          'source sans pro\:300,400,400i,700',
        ],
        display: 'swap',
        preconnect: true,
        attributes: {
            rel: 'stylesheet preload prefetch',
            as: 'style',
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "@mparticle/gatsby-plugin-mparticle",
      options: {
        apiKey: "us1-b2e6472f42ca414799ec642563782f60", 
        logPageViews: false,
        config: {
          isDevelopmentMode: true,
          dataPlan: {
            planId: 'sofa_king_plan',
            planVersion: 1
          }
        },
      },
    },
  ],

}
