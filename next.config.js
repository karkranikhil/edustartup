const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
};
const options= {
  sourcemaps: 'development' // possible values can be production, development, or none
}

module.exports = withPlugins([optimizedImages], {...nextConfiguration, ...options});
