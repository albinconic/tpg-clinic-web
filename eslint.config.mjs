// eslint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import globals from "globals";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    // Ignore build outputs and vendor folders
    ignores: ["**/node_modules/**", ".next/**", "out/**", "build/**"],
  },

  // Core JS rules
  js.configs.recommended,

  // Next.js plugin configuration
  nextPlugin.configs["core-web-vitals"],

  // Legacy extends during migration
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
        ecmaVersion: 2020,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
    },
    rules: {
      // Disallow unescaped characters inside JSX text
      "react/no-unescaped-entities": ["error", { forbid: [">", "}", '"', "'"] }],

      // Enforce single quotes
      quotes: ["error", "single"],

      // TypeScript rules
      "@typescript-eslint/no-explicit-any": "off",

      // React Hooks best practices
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Error Boundary specific rules
      "react/no-unused-class-component-methods": "off", // Allow componentDidCatch
      "react/no-unsafe": ["error", { "checkAliases": true }], // Prevent unsafe lifecycle methods
      
      // Enhanced error handling rules
      "no-console": ["warn", { "allow": ["warn", "error"] }], // Allow error logging
      "prefer-promise-reject-errors": "error", // Ensure proper error objects
      
      // Class component rules for Error Boundaries
      "react/prefer-stateless-function": ["error", { "ignorePureComponents": true }],
    },
  },
  
  // Specific rules for Error Boundary files
  {
    files: ["**/ErrorBoundary.tsx", "**/ErrorBoundary.ts", "**/errorHandler.ts"],
    rules: {
      "react/prefer-stateless-function": "off", // Error boundaries must be class components
      "no-console": "off", // Allow console in error boundaries
      "@typescript-eslint/no-explicit-any": "off", // Allow any in error handling utilities
    },
  },

  // Hook files specific rules
  {
    files: ["**/hooks/**/*.ts", "**/hooks/**/*.tsx"],
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error", // Stricter for custom hooks
    },
  },
];