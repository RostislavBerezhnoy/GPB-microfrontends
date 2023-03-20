const path = require('path')

module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/node_modules/**', '**/dist/**', '**/public/**'],
  env: {
    browser: true,
    node: true,
  },
  plugins: ['promise', 'prettier', 'optimize-regex', 'unicorn', 'sonarjs', '@typescript-eslint'],
  extends: [
    'react-app',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'plugin:optimize-regex/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
  ],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    createDefaultProgram: true,
  },
  settings: {
    react: {
      version: '18',
    },
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
        bracketSameLine: false,
        semi: false,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
        arrowParens: 'avoid',
        tabWidth: 2,
        parser: 'typescript',
        endOfLine: 'auto',
      },
    ],
    'no-undef': 'error',
    'no-console': 'off',
    'consistent-return': 'off',
    'prefer-destructuring': 'warn',
    'guard-for-in': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-restricted-properties': [
      'off',
      {
        object: 'Math',
        property: 'pow',
      },
    ],
    'no-continue': 'warn',
    radix: ['error', 'as-needed'],
    'no-param-reassign': 'warn',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if',
      },
      {
        blankLine: 'always',
        prev: 'if',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'for',
      },
      {
        blankLine: 'always',
        prev: 'for',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'try',
      },
      {
        blankLine: 'always',
        prev: 'try',
        next: '*',
      },
    ],
    'no-nested-ternary': 'off',
    'prefer-promise-reject-errors': 'warn',
    'no-octal-escape': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'no-await-in-loop': 'off',
    'no-unused-vars': 'off',
    'max-classes-per-file': 'off',
    'no-void': 'off',
    'no-alert': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'off',
    'unicorn/consistent-destructuring': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/prefer-spread': 'warn',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-string-slice': 'warn',
    'unicorn/explicit-length-check': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prefer-date-now': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/no-thenable': 'off',
    'sonarjs/cognitive-complexity': ['warn', 15],
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/no-duplicated-branches': 'warn',
    'sonarjs/no-nested-template-literals': 'off',
    'sonarjs/no-small-switch': 'off',
    'import/prefer-default-export': 'off',
    'sonarjs/no-empty-collection': 'off',
    'import/no-cycle': [
      'error',
      {
        maxDepth: 1,
      },
    ],
    'import/extensions': ['off'],
    'import/no-anonymous-default-export': 'off',
    'promise/catch-or-return': 'off',
    'promise/always-return': 'off',
    'promise/no-return-wrap': [
      'error',
      {
        allowReject: true,
      },
    ],
    'promise/no-nesting': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/return-await': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: ['UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '_',
        args: 'after-used',
      },
    ],
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    'no-floating-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    'jest/no-standalone-expect': 'off',
    'jest/expect-expect': 'off',
    'jest/no-mocks-import': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-ignore': 'allow-with-description',
      },
    ],
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
        propElementValues: 'always',
      },
    ],
  },
  overrides: [
    {
      files: [
        "**/*.stories.*"
      ],
      rules: {
        "import/no-anonymous-default-export": "off"
      }
    },
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'unicorn/prefer-module': 'warn',
      },
    },
    {
      files: ['webpack.*.js'],
      rules: {
        'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
      },
    },
  ],
  globals: {
    JSX: 'readonly',
  },
}
