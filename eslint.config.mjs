import { fixupPluginRules } from '@eslint/compat'
import js from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'

import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import ts from 'typescript-eslint'

const excludeSpecialNamesFilter = {
  regex: 'aria-|Component|\\.|Story',
  match: false,
}

// noinspection JSUnusedGlobalSymbols
export default [
  {
    ignores: ['**/eslint.config.mjs', '**/postcss.config.mjs'],
  },
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  jsxA11y.flatConfigs.recommended,

  {
    plugins: {
      'react-hooks': fixupPluginRules(reactHooks),
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },

      sourceType: 'module',

      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: './',
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/no-empty-object-type': 'warn',

      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],

      '@typescript-eslint/prefer-nullish-coalescing': [
        'error',
        {
          ignorePrimitives: {
            string: true,
            boolean: true,
          },
        },
      ],

      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',

      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            arguments: false,
            attributes: false,
          },
        },
      ],

      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          filter: excludeSpecialNamesFilter,
        },

        {
          selector: 'property',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
          filter: excludeSpecialNamesFilter,
        },

        {
          selector: 'property',
          format: ['camelCase'],
          leadingUnderscore: 'require',
          modifiers: ['private'],
          filter: {
            regex: '^\\$$',
            match: false,
          },
        },

        {
          selector: 'objectLiteralProperty',
          format: null,
        },

        {
          selector: 'enumMember',
          format: ['PascalCase'],
        },

        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },

        {
          selector: 'import',
          format: ['camelCase', 'PascalCase'],
        },

        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },

        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
    },
  },
  {
    files: ['src/**/*.test.ts'],

    rules: {
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/require-await': 'off',
    },
  },
]
