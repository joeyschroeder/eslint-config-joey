/* global module */
module.exports = {
  env: {
    browser: true,
    'jest/globals': true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  globals: {
    MyGlobal: true
  },
  parser: 'babel-eslint',
  plugins: ['jest', 'react'],
  rules: {
    'comma-dangle': 0,
    'consistent-return': 0,
    'import/prefer-default-export': [0],
    'prettier/prettier': 1,
    quotes: ['error', 'single'],
    radix: 0,
    'react/forbid-prop-types': [2, { forbid: ['any'] }],
    'react/jsx-filename-extension': [0],
    'react/jsx-fragments': [2, 'element'],
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-one-expression-per-line': [0],
    'react/no-unused-prop-types': 1,
    'react/static-property-placement': [2, 'static public field'],
    semi: ['error', 'always']
  }
};
