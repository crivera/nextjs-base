import path from 'node:path'
import { fileURLToPath } from 'node:url'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

import { FlatCompat } from '@eslint/eslintrc'
import { fixupConfigRules } from '@eslint/compat'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const recommendedConfig = {
  ...eslint.configs.recommended,
  ...tseslint.configs.recommended,
}

const allConfig = {
  ...eslint.configs.all,
  ...tseslint.configs.all,
}

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: recommendedConfig,
  allConfig: allConfig,
})

const fullConfig = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
  {
    ignores: ['.next/**/*'],
  },
)

export default fixupConfigRules(fullConfig)
