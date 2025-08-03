const js = require("@eslint/js");
const eslintPluginReact = require("eslint-plugin-react");
const eslintPluginReactHooks = require("eslint-plugin-react-hooks");
const globals = require("globals");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
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
      "react/no-unescaped-entities": [
        "error",
        {
          forbid: ['>', '}', '"', "'"], // Dodano i `'`
        },
      ],
      "@typescript-eslint/no-explicit-any": "off", // Dozvoli any
      "quotes": ["error", "single"], // Single quotes
    },
  },
];
