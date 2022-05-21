module.exports = {
  root: true,
  extends: ['prettier', '@react-native-community'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': [0],
    curly: ['error', 'multi-line'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'comma-dangle': ['error', 'never'],
    'no-shadow': [0],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-console': ['error']
  }
}
