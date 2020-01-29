module.exports = {
  siteMetadata: {
    title: `A Referral System made For Newsletters`,
    description: `You have an incredible newsletter that everyone should read. You’ve tried ads, social media, podcasts plugs - everything to grow your list. Now you can attract new subscribers through the power of word-of-mouth. We’re Growly - a referral system made for newsletters.`,
    author: `@mcrisostomo9`,
    image: "/images/og-image.png",
    url: "https://trygrowly.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Growly`,
        short_name: `Growly`,
        start_url: `/`,
        background_color: `#ae76b3`,
        theme_color: `#F28CAF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "UA-157274111-1",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
