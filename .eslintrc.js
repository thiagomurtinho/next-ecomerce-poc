module.exports = {
  extends: [
    'next',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', 'tailwindcss', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: true,
        singleQuote: true,
        arrowParens: 'avoid',
        endOfLine: 'lf',
        printWidth: 100,
        tabWidth: 2,
        plugins: ['@ianvs/prettier-plugin-sort-imports'],
      },
    ],
    'padding-line-between-statements': ['warn', { blankLine: 'always', prev: '*', next: 'return' }],
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
  },
};
