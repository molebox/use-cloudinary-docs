module.exports = {
  siteMetadata: {
    siteTitle: `use-cloudinary-docs`,
    defaultTitle: `use-cloudinary-docs`,
    siteTitleShort: `use-cloudinary-docs`,
    siteDescription: `A set of React hooks used to surface the powers of Cloudinary to the your React applications`,
    siteUrl: `https://use-cloudinary.netlify.com`,
    siteAuthor: `@domitriusanthony`,
    siteImage: `static/use-cloudinary-logo.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: `Theme by Rocketseat`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `use-cloudinary hooks`,
        short_name: `useCloudinary`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/base_logo.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://use-cloudinary.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
