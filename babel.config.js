module.exports = {
  presets: [['@babel/env', { loose: true }], '@babel/flow'],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }]],
};
