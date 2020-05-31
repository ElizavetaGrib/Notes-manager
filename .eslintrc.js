module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint/eslint-plugin'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  ignorePatterns: ['**/node_modules/'],
};
