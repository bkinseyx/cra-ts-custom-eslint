module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['.eslintrc'],
  rules: {
    'sonarjs/cognitive-complexity': ['error', 2],
    'max-lines-per-function': ['warn', 20],
  },
};
