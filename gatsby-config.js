module.exports = {
  siteMetadata: {
    title: `Riff Gatsby Starter`,
    description: `Starter`,
    author: `@riff_creative`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@atoms': 'src/components/atoms',
          '@constants': 'src/utils/constants',
          '@helpers': 'src/utils/helpers',
          '@images': 'src/assets/images',
          '@icons': 'src/assets/icons',
          '@molecules': 'src/components/molecules',
          '@organisms': 'src/components/organisms',
          '@theme': 'src/theme',
        },
        extensions: ['js'],
      },
    },
    `gatsby-plugin-jss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `riff-gatsby-starter`,
        short_name: `Starter`,
        start_url: `/`,
        icon: `src/assets/images/favicon-512x512.jpg`,
        display: `minimal-ui`,
      },
    },
  ],
}
