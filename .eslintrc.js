module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.json'],
        paths: ['src'],
      },
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:prettier/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prettier-vscodefix': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'import/no-unresolved': [2, { ignore: ['^~', '^@'], caseSensitive: false }],
    '@typescript-eslint/no-namespace': 'off',
    'import/export': 'off',    
    //"space-in-brackets": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
  },
};
