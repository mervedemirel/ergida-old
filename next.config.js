const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');


const publicRuntimeConfig = {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
};

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${ergida-old}/`
  basePath = `/${ergida-old}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
}
//
// module.exports = withCSS(withImages({
//     localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
//         ? process.env.LOCALE_SUBPATHS
//         : 'none',
// }));

// module.exports = withPlugins([
//     [optimizedImages, {optimizeImagesInDev: true}],
//     [withCSS],
//     [withImages, {
//         localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
//             ? process.env.LOCALE_SUBPATHS
//             : 'none',
//     }]
// ]);

module.exports = withPlugins([
    [withCSS],
    [withImages],
    [withFonts]
]);
