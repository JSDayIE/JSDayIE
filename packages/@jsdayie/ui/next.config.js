const { dependencies } = require("./package.json");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

function getModules() {
  return Object.keys(dependencies || []).filter((dependency) =>
    dependency.startsWith("@jsdayie/")
  );
}

const modules = getModules();

const withTM = require("next-transpile-modules")(modules);

function getAliases(modulesArray) {
  modulesArray.reduce(
    (prev, next) => {
      return {
        ...prev,
        ...{
          [module]: require.resolve(next),
        },
      };
    },
    {
      resolveSymlinks: false,
    }
  );
}

module.exports = withPlugins([optimizedImages, withTM], {
  trailingSlash: true,
  images: {
    loader: "akamai",
    path: "http://localhost:3000/",
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...getAliases(modules),
    };
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      join: false,
    };
    return config;
  },
});
