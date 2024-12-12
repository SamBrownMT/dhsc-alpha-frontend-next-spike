import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    settings: {
      react: {
        version: "detect"
      }
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser, // Use TypeScript parser 
    },
    plugins: {
      react, // React-specific rules
      reactHooks, // React Hooks-specific rules
      '@typescript-eslint': typescriptEslint, // TypeScript-specific rules
    },
    rules: {      
      ...react.configs.recommended.rules, // Extend React recommended rules
      ...reactHooks.config,
      "react/react-in-jsx-scope": "off",
    }
  }
]
