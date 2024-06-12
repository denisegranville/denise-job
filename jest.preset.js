const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
  'node_modules/(?!(superjson)/)', // Add other node_modules that need to be transformed if needed
],
};
