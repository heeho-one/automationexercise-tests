import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import playwright from "eslint-plugin-playwright";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["tests/**/*.{js,ts}", "e2e/**/*.{js,ts}"],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    extends: [
      playwright.configs["flat/recommended"],
      eslint.configs.recommended,
      tseslint.configs.recommended,
      eslintConfigPrettier
    ],
  },
]);
