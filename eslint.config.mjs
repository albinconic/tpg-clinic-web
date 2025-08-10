// eslint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import globals from "globals";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next"; // ✅ Add Next.js ESLint plugin

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

  // ✅ Ensure Next.js plugin is detected (App Router + Flat config)
  // Use "core-web-vitals" for stricter Next.js rules.
  nextPlugin.configs["core-web-vitals"],

  // (Optional) Keep legacy extends during migration; safe to remove later.
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

      // Harmless if @typescript-eslint isn't installed (kept for future use)
      "@typescript-eslint/no-explicit-any": "off",

      // React Hooks best practices
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];