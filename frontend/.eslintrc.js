module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },

  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'eslint-plugin-import-helpers'],
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'newline-before-return': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'import-helpers/order-imports': [
      2,
      {
        newlinesBetween: 'always',
        groups: [
          ['/^gatsby/', 'module'],
          '/^@/styles/',
          '/^@/components/',
          '/^@/lib/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true
        }
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        argsIgnorePattern: '^_'
      }
    ],
    'no-console': [
      2,
      {
        allow: ['warn', 'error']
      }
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }]
  }
};
