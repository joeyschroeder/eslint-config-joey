/* global module */
module.exports = {
  env: {
    browser: true,
    'jest/globals': true
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended'],
  globals: {
    MyGlobal: true
  },
  parser: 'babel-eslint',
  plugins: ['jest'],
  rules: {
    'comma-dangle': 0,
    'consistent-return': 0,
    'import/prefer-default-export': [0],
    'prettier/prettier': 1,
    quotes: ['error', 'single'],
    radix: 0,
    semi: ['error', 'always']
  }
};
