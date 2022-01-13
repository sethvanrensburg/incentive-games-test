module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
  ],
  rules: {
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
    quotes: [
      'error',
      'single',
    ],
    'eol-last': 'error',
    'arrow-parens': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'brace-style': [
      'error',
      'stroustrup',
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'no-plusplus': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }]
  },
};
