import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      // React hooks rules: treat violations as errors (not warnings)
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn", // keep as warn, important for deps

      // React-refresh: reduce noise, only warn on key issues
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Disable other recommended react-hooks rules to reduce noise
      ...Object.fromEntries(
        Object.entries(reactHooks.configs.recommended.rules).map(
          ([rule, level]) => {
            // Keep the two main rules above, disable the rest
            if (
              rule === "react-hooks/rules-of-hooks" ||
              rule === "react-hooks/exhaustive-deps"
            ) {
              return [rule, level];
            }
            return [rule, "off"];
          }
        )
      ),

      // Optional: Disable other rules that are too noisy or low priority
      // Example:
      "no-console": "warn",
      "no-debugger": "error",

      // Add or adjust any other rules you want minimal warnings for here
    },
  }
);
