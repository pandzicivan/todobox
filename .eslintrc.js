module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
  },
  'parser': 'babel-eslint',
  'extends': [
    'google',
    'plugin:react/recommended',
  ],
  'plugins': [
    'react',
    'babel'
  ],
  'parserOptions': {
    'ecmaVersion': 2018,
    'ecmaFeatures': {
      'jsx': true
    },
    'sourceType': 'module'
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'rules': {
    'require-jsdoc': 'off',
    'no-invalid-this': 'off',
    'react/prop-types': 'off',
    'max-len': 'off',
  }
};
