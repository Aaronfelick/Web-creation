module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  ignorePatterns: ["dist", "node_modules"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "detect" } },
  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: [
        "*.config.js",
        "*.config.cjs",
        "postcss.config.js",
        "tailwind.config.js",
        ".eslintrc.cjs",
      ],
      env: { node: true },
      parserOptions: { sourceType: "module" },
    },
  ],
};
