/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "plugin:tailwindcss/recommended", "prettier"],
  plugins: ["tailwindcss"],
  rules: {
    // facultatif : erreurs spécifiques à ton projet
  },
};
