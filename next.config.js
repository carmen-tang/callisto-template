// // // next.config.js
// // const withSass = require("@zeit/next-sass");
// // //const withImages = require("next-images");

// // module.exports = withSass();

// // next.config.js
// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
//   sassLoaderOptions: {sourceMap: true}
// })

// next.config.js
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withSass(withImages());
