module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Jon Gear', // Navigation and Site Title
  siteTitleAlt: 'Jon Gear - Personal Site', // Alternative Site title for SEO
  siteTitleManifest: 'Jon Gear',
  siteUrl: 'https://gear.dev', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: "Jon Gear's Site", // Headline for schema.org JSONLD
  siteBanner: 'src/images/logo.svg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/images/logo.svg', // Your image for favicons. You can find it in the /src folder
  siteDescription: "Jon Gear's personal website and blog", // Your site description
  author: 'Jon Gear', // Author for schemaORGJSONLD
  siteLogo: 'src/images/logo.svg', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@GearedUpTech', // Twitter Username - Optional
  ogSiteName: 'gear.dev', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-138298871-1',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#75A7C6',
  backgroundColor: '#1C2426',
};
