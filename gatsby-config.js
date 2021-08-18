require(`dotenv`).config()

const conditionalConfig = []
if (process.env.CONTEXT === 'production') {
  conditionalConfig.push({
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        process.env.GOOGLE_ANALYTICS, // Google Analytics / GA
      ],
    },
  })
}

module.exports = {
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  siteMetadata: {
    title: `Evan Bancroft`,
    description: `Evan Bancroft is a front end developer located in the Pacific Northwest. He currently works at Riff_ on static sites primarily utilizing React and Gatsby.`,
    author: `Evan Bancroft`,
    siteUrl: `https://www.evanbancroft.com`,
  },
  plugins: [
    ...conditionalConfig,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@atoms': 'src/components/atoms',
          '@constants': 'src/utils/constants',
          '@helpers': 'src/utils/helpers',
          '@images': 'src/assets/images',
          '@pdf': 'src/assets/pdf',
          '@icons': 'src/assets/icons',
          '@molecules': 'src/components/molecules',
          '@organisms': 'src/components/organisms',
          '@themes': 'src/utils/theme',
        },
        extensions: ['js'],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-jss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Evan Bancroft's Portfolio`,
        description: `Evan Bancroft is a front end developer located in the Pacific Northwest. He currently works at Riff_ on static sites primarily utilizing React and Gatsby.`,
        lang: `en`,
        short_name: `Evan Bancroft`,
        start_url: `/`,
        icon: `src/assets/images/favicon.png`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: `async`,
        enableListener: true,
        preconnect: [`https://p.typekit.net`],
        web: [
          {
            name: `neue-haas-grotesk-display`,
            file: `https://use.typekit.net/jtm3lxn.css`,
          },
        ],
      },
    },
  ],
}
