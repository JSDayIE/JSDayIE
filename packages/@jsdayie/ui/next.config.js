const { dependencies } = require('./package.json')

function getModules() {
  return Object.keys(dependencies || []).filter(dependency => dependency.startsWith('@jsdayie/'));
}

const modules = getModules();

const withTM = require('next-transpile-modules')(modules);

function getAliases(modulesArray) {
  modulesArray.reduce((prev, next) => {
    return {
      ...prev,
      ...{
        [module]: require.resolve(next)
      }
    };
  }, {
    resolveSymlinks: false
  });
}

module.exports = withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...getAliases(modules)
    };
    return config;
  },
});
